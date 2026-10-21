import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Natthabhat Nilsuwan | Engineering Portfolio",
  description: "Third-year Mechanical Engineering student at Chulalongkorn University with experience in manufacturing, embedded systems, software, and automotive engineering.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}

