# Natthabhat Nilsuwan — Engineering Portfolio

**Mechanical Engineering student at Chulalongkorn University, working across manufacturing, embedded systems, software, and automotive engineering.**

[Visit my portfolio](https://profile.natthabhat.com/) · [Download my CV](https://profile.natthabhat.com/resume.pdf) · [GitHub](https://github.com/Natthabhat) · [Email](mailto:6730154821@student.chula.ac.th)

## About me

I'm Natthabhat Nilsuwan (Namon), a third-year Mechanical Engineering student with a practical interest in building complete systems—from mechanical parts and electronics to the software that connects them.

I founded **NS Labs**, a 3D printing business that generated **100,000+ THB in revenue within six months**. During my internship at **Western Digital**, I independently developed and deployed an AI-integrated machine inventory application. As part of **CU Formula Student (Rapidamete)**, I contributed to the team's **second-place finish at TSAE Formula Student 2025**.

I am seeking a **full-time engineering internship from May to August 2027**, for 3–4 months, with flexibility to extend.

## What this website shows

This is my personal engineering portfolio and online CV. The home page introduces my background, education, experience, technical skills, and interests. Each experience opens a dedicated page with a fuller explanation of the work, tools used, and project photographs or videos where available.

| Experience | What you'll find |
| --- | --- |
| [NS Labs — 3D Printing Business](https://profile.natthabhat.com/experience/nslabs) | CAD, additive manufacturing, product development, customer orders, and running an independent business. |
| [Western Digital — Engineering Internship](https://profile.natthabhat.com/experience/wd) | A centralized machine inventory application with searchable equipment records, access controls, an AI assistant, and automated notifications. |
| [CU Formula Student](https://profile.natthabhat.com/experience/formula) | Vehicle wiring, sensors, performance testing, and contributions to electrical and EV systems. |
| [Smart Home & IoT](https://profile.natthabhat.com/experience/iot) | Connected devices, Home Assistant, networking, Linux servers, Docker, and self-hosted services. |
| [Programming & Hardware Projects](https://profile.natthabhat.com/experience/hardware) | Projects using Arduino, ESP32, Raspberry Pi, wireless communication, sensors, and custom interfaces. |
| [CU Engineering Camps](https://profile.natthabhat.com/experience/camps) | Planning and on-site coordination across four engineering camps involving more than 800 participants. |

## Education

**Chulalongkorn University** — B.Eng. Mechanical Engineering

2024–2028 (expected) · Third-year student

Relevant coursework: Statics, Dynamics, Thermodynamics, Fluid Mechanics, Mechanics of Materials, Heat Transfer, Design Elements, Mech Machinery, and Computer Aided ME Design.

**Horwang School** — Gifted Class

2018–2024 · GPAX: **3.88**

## Technical interests and skills

- **Design and manufacturing:** Autodesk Fusion 360, CAD, FDM/SLA 3D printing, CNC, laser cutting, and prototyping.
- **Embedded systems:** ESP32, Arduino, Raspberry Pi, MQTT, Zigbee, BLE, and Matter.
- **Software:** Python, C/C++, JavaScript, React, Next.js, Node.js, and PostgreSQL.
- **Systems and simulation:** Linux, Docker, networking, MATLAB, Simulink, Simscape, and ANSYS.

My interests include automotive and EV technology, motorbikes, IoT, manufacturing, DIY projects, and AI.

## About this repository

This repository contains the source code for the portfolio. The site uses **Next.js, React, TypeScript, and CSS**, with responsive overview and experience pages, project galleries, contact links, and a downloadable CV. Photos and videos are stored using Git LFS. Docker deployment is configured for self-hosting.

### Run locally

With Node.js, pnpm, and Git LFS installed:

```sh
git clone https://github.com/Natthabhat/engineering-portfolio.git
cd engineering-portfolio
git lfs install
git lfs pull
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000). To check and build the site:

```sh
pnpm typecheck
pnpm build
pnpm start
```

### Content and layout

| File | Purpose |
| --- | --- |
| `app/resume-overview.ts` | Home-page summary, education, experience summaries, skills, and internship availability. |
| `app/experiences.ts` | Detailed experience content, tools, and project media references. |
| `app/data.ts` | Profile and contact information, plus supporting project data. |
| `components/portfolio.tsx` | Home-page layout. |
| `app/experience/[slug]/page.tsx` | Experience page template. |
| `app/globals.css` | Site styling and responsive layouts. |
| `public/resume.pdf` | Downloadable CV. |

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Get in touch

For internship opportunities, engineering projects, or collaboration, contact me at **[6730154821@student.chula.ac.th](mailto:6730154821@student.chula.ac.th)**.

[Explore the portfolio →](https://profile.natthabhat.com/)
