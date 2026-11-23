// Delta Haptic Device: Mechanics of Machinery 2026/1 group project.
// Source: https://github.com/Natthabhat/Mech-Machinery-2026- (README, November 2026).
const img = (file: string, alt: string, caption: string) => ({src: `/images/delta/${file}`, alt, caption});

export const deltaRepo = "https://github.com/Natthabhat/Mech-Machinery-2026-";

export const deltaExperience = {
 id: "delta",
 title: "Delta Haptic Device",
 role: "Mechanics of Machinery · Team course project",
 period: "2026 · Three-member team",
 summary: [
  "Designed and built a low-cost 3-DOF delta haptic device driven by three NEMA17 motors through rope capstans.",
  "Derived the inverse kinematics, Jacobian, and dynamics symbolically in MATLAB, and verified the DOF with Grübler–Kutzbach.",
  "Built a Simscape Multibody model from the CAD and simulated the largest circle the hand can trace.",
 ],
 introduction: "A low-cost three-degree-of-freedom haptic interface. The user holds a handle that moves in 3D, and the device can read its position and push back with a force. It is a delta (parallel) mechanism with three NEMA17 stepper motors, each driving its arm through a rope capstan, built from 3D-printed PETG parts.",
 link: {href: deltaRepo, label: "View project on GitHub"},
 sections: [
  {heading: "Mechanism design", bullets: [
   "Three identical legs placed 120° apart. Each leg is a chain of motor, rope capstan, upper arm, and two parallel forearm rods to the hand.",
   "Rope capstan with a 76/9 ≈ 8.44 ratio gives more torque with no gears and no backlash.",
   "Each pair of parallel rods with M6 rod ends forms a parallelogram, so the hand only translates in x, y, and z and cannot rotate.",
   "Final parts modelled in CAD and 3D-printed in PETG, with 606ZZ bearings at the shoulders. Every part was weighed for the simulation model.",
  ], images: [
   img("final_unit_3.jpg", "Assembled delta haptic device with yellow capstan drums and green forearm rods", "The final unit: three capstan-driven legs joined at the blue handle."),
   img("final_unit_6.jpg", "Side view of one leg showing the motor, small drum, rope, and big drum", "One leg: the NEMA17 motor drives the yellow big drum through a rope capstan."),
  ]},
  {heading: "Kinematics & DOF analysis", bullets: [
   "Wrote each leg as one constraint, |Cᵢ − Bᵢ| = Lb (the rods cannot stretch), and solved for the arm angle with the half-angle substitution u = tan(q/2) to get the inverse kinematics.",
   "Differentiated the constraints to get the Jacobian for speed and force. Holding the device still against gravity needs only about 10.7 mN·m per motor.",
   "Grübler–Kutzbach analysis with 11 links and 15 joints gives M = 9: 6 idle rod spins plus 3 useful hand translations, so three motors fully actuate the device.",
  ], images: [
   img("delta_symbolic_anim_q.png", "Plots of shoulder angle, speed, and acceleration along the circle path", "Shoulder angle, speed, and acceleration along the circle from the symbolic solution."),
  ]},
  {heading: "Simulation & verification", bullets: [
   "Built a Simscape Multibody model directly from the STEP files, including weighed masses, rope capstans, and end-stops.",
   "Found the largest circle the hand can trace (about 30 mm radius). It is limited by the 13° tilt of the rod ends rather than arm travel.",
   "Animated the circle motion in a MATLAB live script and checked it against the numeric inverse kinematics, rope end-stops, and rod-end tilt.",
   "Cross-checked forward kinematics, the Jacobian, and gravity compensation between the symbolic math and the Simscape model.",
  ], images: [
   img("delta_symbolic_anim_frame.png", "3D plot of the delta mechanism with the circle path", "Symbolic animation: upper arms (red), rods (green), and the hand tracing the circle."),
  ]},
  {heading: "Prototype to final unit", bullets: [
   "Built a first prototype to test the layout, then refined the drums, brackets, and arms into the final design.",
   "Bench-tested with three TB6600 stepper drivers and an ESP32-S3 controller.",
   "Real force feedback would need torque-controlled drives and encoders, which is the next step for the device.",
  ], images: [
   img("prototype_1.jpg", "First prototype of the delta mechanism in green and blue PETG", "The first prototype."),
   img("final_unit_1.jpg", "Assembling the final unit on the workbench", "Assembling the final unit."),
  ]},
 ],
 tools: ["MATLAB", "Symbolic Math", "Simscape Multibody", "CAD", "PETG 3D printing", "ESP32-S3"],
 images: [] as {src: string; alt: string; caption: string}[],
};

export const deltaMedia: {src: string; type: "image" | "video"; alt: string; poster?: string}[] = [
 {src: "/images/delta/final_unit_demo.mp4", type: "video", poster: "/images/delta/final_unit_demo_poster.jpg", alt: "Moving the delta haptic device handle by hand"},
 ...[1, 2, 3, 4, 5, 6, 7, 8].map(n => ({src: `/images/delta/final_unit_${n}.jpg`, type: "image" as const, alt: `Final delta haptic device, photo ${n}`})),
 ...[1, 2, 3].map(n => ({src: `/images/delta/prototype_${n}.jpg`, type: "image" as const, alt: `First prototype, photo ${n}`})),
 {src: "/images/delta/delta_symbolic_anim_frame.png", type: "image", alt: "Symbolic circle-motion animation frame"},
 {src: "/images/delta/delta_symbolic_anim_q.png", type: "image", alt: "Shoulder angle, speed, and acceleration plots"},
];
