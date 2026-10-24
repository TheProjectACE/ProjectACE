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
        <section className="panel" style={{ marginTop: 20 }}><p className="eyebrow">Evidence &amp; references</p><h2>Sources and results</h2>{project.sources.length ? <ul className="content-list">{project.sources.map((source) => <li key={source.url}><a className="external-link" href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul> : <p className="muted">No external sources or measured findings are attached to this record yet. Add source links and dated evidence before presenting a conclusion.</p>}<p className="field-help">Contributor names and roles are not shown unless intentionally added and approved for public display.</p></section>
      </div>
      <aside className="panel"><p className="eyebrow">Project details</p><p><strong>Department</strong><br/><Link className="external-link" href={"/departments/" + project.departmentSlug}>{department?.name ?? project.departmentName}</Link></p><p><strong>Status</strong><br/>{project.status}</p><p><strong>Topic</strong><br/>{project.topic}</p><p><strong>Last updated</strong><br/>{project.updated}</p><hr className="rule"/><Link className="button button-secondary" href="/projects">← Back to projects</Link></aside>
    </div></section>
  </>;
}
