import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
export const metadata: Metadata = { title: "About", description: "ProjectACE mission, approach, and research principles." };
export default function AboutPage() {
 return <><PageIntro eyebrow="Who we are" title="Curiosity into creation." description="ProjectACE is a student-led science and engineering initiative exploring the natural world, developing affordable technologies, and turning questions into research, experiments, and useful ideas."/><section className="page-body"><div className="wrap grid-2">
  <article className="panel"><p className="eyebrow">Mission</p><h2>Learn by investigating.</h2><p className="muted">Make science, engineering, and creative technology approachable through clear questions, documented methods, practical learning, and collaboration.</p></article>
  <article className="panel"><p className="eyebrow">Vision</p><h2>Useful ideas, honestly tested.</h2><p className="muted">Build a culture where students explore ambitious questions, learn from setbacks, document uncertainty, and share work others can understand.</p></article>
  <article className="panel"><p className="eyebrow">Approach / 01</p><h2>Question</h2><p className="muted">Define the problem, what is known, what evidence is missing, and what would help answer it.</p></article>
  <article className="panel"><p className="eyebrow">Approach / 02</p><h2>Investigate</h2><p className="muted">Use appropriate sources, safe methods, careful observations, and simple tools before drawing conclusions.</p></article>
  <article className="panel"><p className="eyebrow">Approach / 03</p><h2>Build and share</h2><p className="muted">Turn learning into a prototype, analysis, explanation, or next question, while keeping limitations visible.</p></article>
  <article className="panel"><p className="eyebrow">Research integrity</p><h2>Show the evidence.</h2><p className="muted">Proposed ideas, simulations, internal reports, validated measurements, and peer-reviewed publications are different. Always label the record type.</p></article>
 </div><div className="wrap" style={{ marginTop: 24 }}><p className="field-help">This website describes ProjectACE as a student-led initiative and does not claim formal accreditation, institutional affiliation, sponsorship, or peer review.</p></div></section></>;
}
