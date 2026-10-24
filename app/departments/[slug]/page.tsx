import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { departments, projects } from "@/lib/data";

export function generateStaticParams() { return departments.map((department) => ({ slug: department.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  return department ? { title: department.name, description: department.summary } : {};
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  if (!department) notFound();
  const departmentProjects = projects.filter((project) => project.departmentSlug === department.slug);
  return <>
    <PageIntro eyebrow={department.shortLabel + " · ACE / " + department.number} title={department.name} description={department.mission} breadcrumbs={[{ label: "Departments", href: "/departments" }, { label: department.name }]} />
    <section className="page-body"><div className="wrap page-grid">
      <div>
        <section className="panel" style={{ marginBottom: 20 }}><p className="eyebrow">Research themes</p><h2>Questions to investigate</h2><ul className="content-list">{department.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul></section>
        <section className="panel"><p className="eyebrow">Tools &amp; datasets</p><h2>Ways to explore</h2><ul className="content-list">{department.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul><p className="field-help">{department.researchNote}</p></section>
      </div>
      <aside className="panel"><p className="eyebrow">Project work</p><h2>Current library records</h2><p className="muted small">This list is based on currently documented repository records. A status does not imply a publication or validated result.</p>
        {departmentProjects.length ? <div className="work-list">{departmentProjects.map((project) => <div className="work-row" key={project.slug}><span className={"badge badge-" + project.status.toLowerCase().replaceAll(" ", "-")}>{project.status}</span>{project.isDemo && <span className="badge badge-demo" style={{ marginLeft: 6 }}>Demo</span>}<h3 style={{ marginTop: 12 }}><Link href={"/projects/" + project.slug}>{project.title}</Link></h3><p>{project.summary}</p></div>)}</div> : <div className="empty-state"><h3>No project records yet</h3><p>As work is documented, add methodology, contributor roles where authorized, sources, and results.</p></div>}
        <hr className="rule" /><Link className="button button-primary" href={"/projects?department=" + encodeURIComponent(department.name)}>Explore related projects →</Link>
      </aside>
    </div></section>
  </>;
}
