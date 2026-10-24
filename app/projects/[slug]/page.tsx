import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { projects, departments } from "@/lib/data";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const department = departments.find((item) => item.slug === project.departmentSlug);
  return <>
    <PageIntro eyebrow={project.departmentName + " · " + project.topic} title={project.title} description={project.summary} breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
    <section className="page-body"><div className="wrap page-grid">
      <div>
        <section className="panel"><div className="project-meta"><span className={"badge badge-" + project.status.toLowerCase().replaceAll(" ", "-")}>{project.status}</span>{project.isDemo && <span className="badge badge-demo">Demonstration content</span>}<span className="quiet small">Last content update: {project.updated}</span></div><hr className="rule"/><p className="eyebrow">Research question</p><h2>{project.question}</h2>
          <h3>Objectives</h3><ul className="content-list">{project.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Methodology / planned workflow</h3><ol className="content-list">{project.methodology.map((item) => <li key={item}>{item}</li>)}</ol>
          <h3>Equipment, data &amp; materials</h3><ul className="content-list">{project.materials.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Limitations &amp; open questions</h3><ul className="content-list">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="panel" style={{ marginTop: 20 }}><p className="eyebrow">Evidence &amp; references</p><h2>Findings and sources</h2>
          <h3>Findings</h3>{project.findings?.length ? <ul className="content-list">{project.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul> : <p className="muted">No validated findings are recorded for this project yet. Proposed concepts and planned tests are not experimental conclusions.</p>}
          <h3>Datasets</h3>{project.datasets?.length ? <ul className="content-list">{project.datasets.map((dataset) => <li key={dataset.url}><a className="external-link" href={dataset.url} target="_blank" rel="noreferrer">{dataset.label} ↗</a></li>)}</ul> : <p className="muted small">No project-specific dataset links have been attached.</p>}
          <h3>Sources</h3>{project.sources.length ? <ul className="content-list">{project.sources.map((source) => <li key={source.url}><a className="external-link" href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul> : <p className="muted">No external sources are attached to this record yet. Add source links and dated evidence before presenting a conclusion.</p>}
          {project.reportUrl && <p><a className="external-link" href={project.reportUrl} target="_blank" rel="noreferrer">Project report ↗</a></p>}
          {project.repositoryUrl && <p><a className="external-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">Source repository ↗</a></p>}
          <h3>Public contributors</h3>{project.contributors?.some((person) => person.publicDisplayApproved) ? <ul className="content-list">{project.contributors.filter((person) => person.publicDisplayApproved).map((person) => <li key={person.name + person.role}>{person.name} — {person.role}</li>)}</ul> : <p className="muted small">No contributor profiles are publicly listed. Names and roles require explicit authorization before display.</p>}
        </section>
      </div>
      <aside className="panel"><p className="eyebrow">Project details</p><p><strong>Department</strong><br/><Link className="external-link" href={"/departments/" + project.departmentSlug}>{department?.name ?? project.departmentName}</Link></p><p><strong>Status</strong><br/>{project.status}</p><p><strong>Topic</strong><br/>{project.topic}</p><p><strong>Last updated</strong><br/>{project.updated}</p><hr className="rule"/><Link className="button button-secondary" href="/projects">← Back to projects</Link></aside>
    </div></section>
  </>;
}
