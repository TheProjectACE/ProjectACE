"use client";

import { useEffect, useMemo, useState } from "react";
import { projects, departments, projectStatuses } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectBrowser() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All departments");
  const [status, setStatus] = useState("All statuses");

  useEffect(() => {
    const requestedDepartment = new URLSearchParams(window.location.search).get("department");
    if (requestedDepartment && departments.some((item) => item.name === requestedDepartment)) {
      setDepartment(requestedDepartment);
    }
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesQuery = !normalized || [
        project.title, project.summary, project.topic, project.departmentName,
        project.question, ...project.objectives, ...project.methodology,
      ].join(" ").toLowerCase().includes(normalized);
      return matchesQuery
        && (department === "All departments" || project.departmentName === department)
        && (status === "All statuses" || project.status === status);
    });
  }, [query, department, status]);

  return (
    <>
      <div className="filters" aria-label="Project filters">
        <div className="field">
          <label htmlFor="project-search">Search projects</label>
          <input id="project-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try ‘CAD’, ‘water’, or ‘astronomy’" />
        </div>
        <div className="field">
          <label htmlFor="department-filter">Department</label>
          <select id="department-filter" value={department} onChange={(event) => setDepartment(event.target.value)}>
            <option>All departments</option>
            {departments.map((item) => <option key={item.slug}>{item.name}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="status-filter">Status</label>
          <select id="status-filter" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>All statuses</option>
            {projectStatuses.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <p className="muted small" aria-live="polite">Showing {filtered.length} of {projects.length} project records. Some are explicitly marked as demonstrations.</p>
      {filtered.length ? (
        <div className="project-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      ) : (
        <div className="empty-state"><h3>No matching projects</h3><p>Try another keyword, department, or status.</p><button className="button button-secondary button-small" type="button" onClick={() => { setQuery(""); setDepartment("All departments"); setStatus("All statuses"); }}>Reset filters</button></div>
      )}
    </>
  );
}
