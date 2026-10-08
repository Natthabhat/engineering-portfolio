import { Fragment } from "react";
import { wordFormatting } from "@/app/word-formatting";

/** Preserve the resume wording and its run-level bold emphasis. */
export default function ResumeText({ text }: { text: string }) {
 const spans = wordFormatting[text.trim()];
 if (!spans) return text;
 return <>{spans.map((span, index) => span.bold
  ? <strong key={index}>{span.text}</strong>
  : <Fragment key={index}>{span.text}</Fragment>)}</>;
}
