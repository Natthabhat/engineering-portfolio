import type { Metadata } from "next";
import Image from "next/image";
import ResumeText from "@/components/resume-text";
import ProjectGallery from "@/components/project-gallery";
import { campsMedia } from "@/app/camps-media";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { experiences } from "@/app/experiences";
export function generateStaticParams() { return experiences.map(e => ({slug:e.id})); }
export async function generateMetadata({params}: {params:Promise<{slug:string}>}):Promise<Metadata> {
 const {slug}=await params; const e=experiences.find(e=>e.id===slug);
 return {title:e ? `${e.title} | Natthabhat Nilsuwan` : "Experience not found"};
}
export default async function ExperiencePage({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;const index=experiences.findIndex(e=>e.id===slug);if(index<0)notFound();
 const e=experiences[index];const next=experiences[(index+1)%experiences.length];
 return <><header className="detail-nav"><Link href="/#experience"><ArrowLeft size={17}/> Back to overview</Link><a href="/resume.pdf" download>Download CV <ArrowUpRight size={16}/></a></header><main className="detail-page">
  <section className="detail-intro"><p className="eyebrow">EXPERIENCE 0{index+1} / 0{experiences.length}</p><h1 className={e.detailTitle?"document-title":undefined}><ResumeText text={e.detailTitle??e.title}/></h1>{!e.detailTitle&&<p className="detail-role">{e.role}</p>}<p className="muted">{e.period}</p>{(e.introductionParagraphs??[e.introduction]).map(text=><p className="detail-description" key={text}><ResumeText text={text}/></p>)}{e.id==="nslabs"&&<a className="business-site-link" href="https://rapid-layers.com/th/" target="_blank" rel="noopener noreferrer">Visit Rapid Layers website <ArrowUpRight size={17}/></a>}<div className="tools">{e.tools.map(t=><span key={t}>{t}</span>)}</div></section>
  <div className="detail-layout"><aside><p className="eyebrow">ON THIS PAGE</p>{e.sections.map((s,i)=><a key={s.heading} href={`#section-${i}`}>{s.heading}</a>)}{(e.images.length>0||e.id==="nslabs")&&<a href="#gallery">{e.id==="camps"?"Media gallery":"Project gallery"}</a>}</aside><div>{e.sectionLabel&&<h2 className="section-group-label"><ResumeText text={e.sectionLabel}/></h2>}{e.sections.map((s,i)=><section className="detail-section" id={`section-${i}`} key={s.heading}><h2><ResumeText text={s.heading}/></h2>{s.blocks?s.blocks.map((block,i)=>block.type==="paragraph"?<p className="section-paragraph" key={i}><ResumeText text={block.text}/></p>:<ul key={i}>{block.items.map(text=><li key={text}><ResumeText text={text}/></li>)}</ul>):<ul>{s.bullets.map(b=><li key={b}><ResumeText text={b}/></li>)}</ul>}{s.images&&<div className="section-photos">{s.images.map(im=><figure key={im.src}><a className="section-photo-link" href={im.src} target="_blank" rel="noreferrer" aria-label={`View full image: ${im.caption}`}><Image src={im.src} alt={im.alt} fill sizes="(max-width:700px) 88vw, 350px"/></a><figcaption>{im.caption}</figcaption></figure>)}</div>}</section>)}
  {e.id==="nslabs"?<ProjectGallery/>:e.id==="camps"?<ProjectGallery items={campsMedia} title="Media gallery"/>:e.images.length>0&&<section id="gallery" className="detail-gallery"><h2>Project gallery</h2>{e.images.map(im=><figure key={im.src}><div><Image src={im.src} alt={im.alt} fill sizes="(max-width: 750px) 90vw, 700px"/></div><figcaption>{im.caption}</figcaption></figure>)}</section>}</div></div>
  <nav className="detail-bottom" aria-label="Experience navigation"><Link href="/#experience"><ArrowLeft size={16}/> All experiences</Link><Link href={`/experience/${next.id}`}>Next: {next.title}<ArrowRight size={17}/></Link></nav>
 </main></>;
}





