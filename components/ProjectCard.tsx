import Link from "next/link";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const statusClass = "badge badge-" + project.status.toLowerCase().replaceAll(" ", "-");
  return (
    <article className="project-card">
      <div className="project-meta">
        <span className={statusClass}>{project.status}</span>
        {project.isDemo && <span className="badge badge-demo">Demonstration</span>}
      </div>
      <h3><Link href={"/projects/" + project.slug}>{project.title}</Link></h3>
      <p>{project.summary}</p>
      <div className="project-meta" style={{ marginTop: "16px" }}>
        <span className="kicker">{project.departmentName}</span>
        <span aria-hidden="true" className="quiet">·</span>
        <span className="quiet small">{project.topic}</span>
      </div>
      <Link className="card-link" href={"/projects/" + project.slug}>View project <span aria-hidden="true">→</span></Link>
    </article>
  );
}
