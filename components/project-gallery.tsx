"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { nslabsMedia } from "@/app/nslabs-media";

type GalleryItem = {src:string;type:"image"|"video";alt:string;poster?:string};
export default function ProjectGallery({items=nslabsMedia,title="Project gallery"}:{items?:GalleryItem[];title?:string}) {
 const [filter,setFilter]=useState("all");
 const [limit,setLimit]=useState(18);
 const [selected,setSelected]=useState<string|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const player=useRef<HTMLVideoElement>(null);
 const photos=items.filter(m=>m.type==="image");
 const videos=items.filter(m=>m.type==="video");
 const visible=items.filter(m=>filter==="all"||m.type===filter);
 const current=items.find(m=>m.src===selected);
 const media=current?.type==="video"?videos:photos;
 const index=media.findIndex(m=>m.src===selected);
 function open(src:string){setSelected(src);dialog.current?.showModal();}
 function close(){player.current?.pause();dialog.current?.close();setSelected(null);}
 function move(direction:number){player.current?.pause();setSelected(media[(index+direction+media.length)%media.length].src);}
 return <section id="gallery" className="detail-gallery nslabs-gallery">
  <h2>{title}</h2><p className="gallery-count">{photos.length} photos · {videos.length} videos. Select a photo or video to open it.</p>
  <div className="gallery-filters" aria-label="Gallery filters">{[["all","All"],["image","Photos"],["video","Videos"]].map(([value,label])=><button key={value} aria-pressed={filter===value} onClick={()=>{setFilter(value);setLimit(18);}}>{label}</button>)}</div>
  <div className="gallery-grid">{visible.slice(0,limit).map(m=><div className="gallery-tile" key={m.src}><button onClick={()=>open(m.src)} aria-label={`${m.type==="video"?"Play":"Open"} ${m.alt}`}><Image src={m.type==="video"?m.poster!:m.src} alt={m.alt} fill sizes="(max-width:700px) 44vw, 230px"/>{m.type==="video"&&<><span className="gallery-play"><Play size={26} fill="currentColor" aria-hidden="true"/></span><span className="gallery-video-label">Play video</span></>}</button></div>)}</div>
  {limit<visible.length&&<button className="gallery-more" onClick={()=>setLimit(n=>n+18)}>Load more ({visible.length-limit} remaining)</button>}
  <dialog ref={dialog} className="gallery-dialog" aria-label={current?.type==="video"?"Video player":"Photo viewer"} onClose={()=>{player.current?.pause();setSelected(null);}} onClick={event=>{if(event.target===event.currentTarget)close();}} onKeyDown={event=>{if(current?.type==="image"){if(event.key==="ArrowRight")move(1);if(event.key==="ArrowLeft")move(-1);}}}>
   {current&&<><div className="gallery-dialog-bar"><span>{current.type==="video"?"Video":"Photo"} {index+1} / {media.length}</span><button onClick={close} aria-label="Close media">Close ×</button></div><div className="gallery-full-photo">{current.type==="video"?<video key={current.src} ref={player} src={current.src} poster={current.poster} controls playsInline autoPlay preload="metadata" aria-label={current.alt}>Your browser does not support video playback.</video>:<Image src={current.src} alt={current.alt} fill sizes="90vw"/>}</div><div className="gallery-dialog-bar"><button onClick={()=>move(-1)}>← Previous</button><a href={current.src} target="_blank" rel="noreferrer">Open original</a><button onClick={()=>move(1)}>Next →</button></div></>}
  </dialog>
 </section>;
}

