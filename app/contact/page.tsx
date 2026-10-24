import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
export const metadata: Metadata = { title: "Contact", description: "ProjectACE collaboration contact configuration and privacy guidance." };
export default function ContactPage() {
 const email = process.env.CONTACT_EMAIL;
 const safeEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
 return <><PageIntro eyebrow="Collaboration · Questions · Privacy" title="Start a conversation." description="For a reliable public contact channel, ProjectACE needs an address or collaboration endpoint intentionally configured by maintainers."/><section className="page-body"><div className="wrap grid-2">
  <section className="panel"><h2>General inquiries</h2>{safeEmail ? <p><a className="external-link" href={"mailto:" + safeEmail}>{safeEmail}</a></p> : <><p className="muted">No public contact email is configured. This page avoids inventing an address.</p><div className="notice">Setup needed: add an approved address to the CONTACT_EMAIL environment variable in Vercel.</div></>}</section>
  <section className="panel"><h2>Collaboration</h2><p className="muted">Include the topic, what you would like to collaborate on, and a public link to relevant work. Do not include sensitive or private material in a public issue.</p></section>
  <section className="panel"><h2>Privacy and applications</h2><p className="muted">Do not submit personal information until an application endpoint and privacy notice are configured. This initial site does not store contact messages or job applications.</p><p className="small quiet">Maintainers should explain data access, purpose, retention, and deletion before enabling collection.</p></section>
  <section className="panel"><h2>Repository</h2><p className="muted">For code and website changes, use the ProjectACE repository and its issue or pull-request process.</p><a className="external-link" href="https://github.com/TheProjectACE/ProjectACE" target="_blank" rel="noreferrer">ProjectACE on GitHub ↗</a></section>
 </div></section></>;
}
