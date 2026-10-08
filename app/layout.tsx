import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Natthabhat Nilsuwan | Engineering Portfolio",
  description: "Mechanical engineering student building across manufacturing, embedded systems, and software. Explore Namon's projects and experience.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}

