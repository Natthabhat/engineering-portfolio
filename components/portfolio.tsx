import Link from "next/link";
import ResumeText from "@/components/resume-text";
import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "@/app/data";
import { resumeOverview } from "@/app/resume-overview";

export default function Portfolio() {
 return <>
  <a className="skip" href="#main">Skip to content</a>
  <header className="resume-nav"><a href="#experience">Experience</a><a href="#skills">Technical skills</a><a href="/resume.pdf" download><Download size={15}/> Download CV</a></header>
  <main id="main" className="resume">
   <section className="resume-intro">
    <div className="intro-copy"><p className="eyebrow">ENGINEERING PORTFOLIO</p><h1>Natthabhat Nilsuwan<span>(Namon)</span></h1><a className="email" href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a></div>
    <div className="home-photos"><div className="formal-photo"><Image src="/images/portrait-formal.jpg" alt="Natthabhat Nilsuwan in university uniform" fill sizes="(max-width: 700px) 40vw, 130px" preload/></div><div className="casual-photo"><Image src="/images/portrait-painting.jpg" alt="Natthabhat painting at an outdoor table" fill sizes="(max-width: 700px) 44vw, 158px" loading="eager"/></div></div>
   </section>
   <section className="education-summary"><h2>Education</h2><div>{resumeOverview.education.map(line=><p key={line}><ResumeText text={line}/></p>)}</div><div className="internship"><span>INTERNSHIP AVAILABILITY</span><p><ResumeText text={resumeOverview.availability}/></p></div></section>
   <section id="experience" className="experience-summary"><div className="section-title"><h2>Experience</h2><p>A brief overview. Select an experience to read the full story.</p></div>
    {resumeOverview.experiences.map((e,i)=><Link href={`/experience/${e.id}`} key={e.id} className="experience-row"><span className="row-number">0{i+1}</span><div className="row-content"><div className="row-heading"><h3><ResumeText text={e.title}/></h3></div><ul>{e.summary.map(s=><li key={s}><ResumeText text={s}/></li>)}</ul></div></Link>)}
   </section>
   <section id="skills" className="skills-summary"><h2>Technical Skills</h2><div>{resumeOverview.skills.map(line=>{const colon=line.indexOf(":");return <p key={line}><span className="skill-label">{line.slice(0,colon+1)}</span>{" "}<span>{line.slice(colon+1).trim()}</span></p>})}</div></section>
   <section className="interests-summary"><h2>Interests</h2><p>{resumeOverview.interests}</p></section>
   <footer className="resume-footer"><p>Interested in working together?</p><a href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17}/></a></footer>
  </main>
 </>;
}



