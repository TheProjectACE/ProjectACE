import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { getResearchDataSources } from "@/lib/data-sources";
export const metadata: Metadata = { title: "Datasets", description: "Authoritative scientific dataset resources and guidance on provenance and units." };
export default function DatasetsPage() {
  const researchSources = getResearchDataSources();
  return <><PageIntro eyebrow="Data provenance · Units · Access" title="Data you can trace." description="Start with an authoritative provider, then read the product-level documentation. ProjectACE does not currently mirror or promise live access to the sources listed here." /><section className="page-body"><div className="wrap">
    <div className="notice" style={{ marginBottom: 24 }}>No external API is wired into this page. Availability, keys, terms, and rate limits vary by provider; verify these before building a pipeline.</div>
    <div className="work-list">{researchSources.map((source) => <article className="dataset-row" key={source.url} style={{ padding: 20 }}><div className="card-top"><span className="department-icon" aria-hidden="true">↗</span><span className="kicker">{source.kind}</span></div><h3 style={{ fontFamily: "var(--display)" }}>{source.name}</h3><p className="muted">{source.note}</p><p><a className="external-link" href={source.url} target="_blank" rel="noreferrer">Provider website ↗</a></p></article>)}</div>
    <section className="panel" style={{ marginTop: 24 }}><h2>Before you analyze a dataset</h2><ul className="content-list"><li>Record the provider, exact dataset or table, retrieval date, and licensing.</li><li>Read column definitions and confirm units.</li><li>Keep raw files unchanged and document transformations.</li><li>Mark missing values and invalid rows instead of silently guessing.</li></ul><Link className="button button-primary" href="/lab">Open ACE Lab CSV explorer →</Link></section>
  </div></section></>;
}
