import Link from "next/link";
import type { CSSProperties } from "react";
import type { Department } from "@/lib/data";

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className="department-card" style={{ "--dept": department.color } as CSSProperties}>
      <div className="card-top">
        <span className="department-icon" aria-hidden="true">{department.code}</span>
        <span className="card-code">ACE / {department.number}</span>
      </div>
      <h3>{department.name}</h3>
      <p>{department.summary}</p>
      <Link className="card-link" href={"/departments/" + department.slug}>
        Explore {department.shortLabel.toLowerCase()} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
