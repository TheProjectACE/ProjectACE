import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { getResearchDataSources } from "@/lib/data-sources";
export const metadata: Metadata = { title: "Research library", description: "A source-first guide to research resources and reproducible science." };
export default function ResearchPage() {
  const researchSources = getResearchDataSources();
  return <><PageIntro eyebrow="Methods · References · Reproducibility" title="Research starts with sources." description="Find official starting points for scientific datasets and follow each dataset&apos;s own documentation before drawing conclusions. This is a resource directory, not a list of ProjectACE publications." /><section className="page-body"><div className="wrap">
    <div className="notice" style={{ marginBottom: 24 }}>There are no peer-reviewed publications or verified research reports published in this initial library. Links below lead to external resources, not ProjectACE results.</div>
    <div className="work-list">{researchSources.map((source) => <article className="work-row" key={source.url}><span className="kicker">{source.kind}</span><h3 style={{ marginTop: 7 }}>{source.name}</h3><p>{source.note}</p><p style={{ marginTop: 10 }}><a className="external-link" href={source.url} target="_blank" rel="noreferrer">Open official resource ↗</a></p></article>)}</div>
    <section className="panel" style={{ marginTop: 24 }}><h2>How a record becomes research</h2><ol className="content-list"><li>Record the research question and data source.</li><li>Preserve retrieval dates, definitions, units, and licensing details.</li><li>Describe filtering and methods so others can understand the analysis.</li><li>Separate observations from simulations, assumptions, and interpretation.</li><li>Report limitations and inconclusive findings as well as interesting results.</li></ol></section>
  </div></section></>;
}
