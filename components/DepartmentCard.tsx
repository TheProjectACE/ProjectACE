import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Department } from "@/lib/data";

function DepartmentMark({ slug }: { slug: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  let art: ReactNode;
  switch (slug) {
    case "aeroace":
      art = <><path {...common} d="M4 13.5 20 4l-5.4 16-3.1-6.6L4 13.5Z" /><path {...common} d="m11.5 13.4 4.2-4.1" /></>;
      break;
    case "aquaace":
      art = <><path {...common} d="M12 3.5C9.4 7.2 6 10.4 6 14a6 6 0 0 0 12 0c0-3.6-3.4-6.8-6-10.5Z" /><path {...common} d="M8.5 15.5c1.2 1.3 2.4 1.3 3.5 0s2.3-1.3 3.5 0" /></>;
      break;
    case "landace":
      art = <><path {...common} d="M19.5 4.5C11 4.5 5 7.8 5 14a5.5 5.5 0 0 0 5.5 5.5c6.2 0 9-6 9-15Z" /><path {...common} d="M4 20 14.5 9.5M9 15l-.5-4M14 10l4 .5" /></>;
      break;
    case "roboace":
      art = <><rect {...common} x="5" y="7" width="14" height="12" rx="3" /><path {...common} d="M12 3v4M9 12h.1M15 12h.1M9 16h6M2.5 11v4M21.5 11v4" /><circle cx="9" cy="12" r="1" fill="currentColor" /><circle cx="15" cy="12" r="1" fill="currentColor" /></>;
      break;
    case "astroace":
      art = <><circle {...common} cx="12" cy="12" r="3.2" /><ellipse {...common} cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-28 12 12)" /><circle cx="18.8" cy="7.2" r="1.4" fill="currentColor" /></>;
      break;
    default:
      art = <><path {...common} d="m5 18 2.1-5.5L17 3l4 4-9.5 9.9L5 18Z" /><path {...common} d="m14.5 5.5 4 4M4 4v4M2 6h4M18 16v5M15.5 18.5h5" /></>;
  }
  return <svg className={"department-mark department-mark-" + slug} viewBox="0 0 24 24" aria-hidden="true">{art}</svg>;
}

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className={"department-card department-card-" + department.slug} style={{ "--dept": department.color } as CSSProperties}>
      <div className="card-top">
        <span className="department-icon" aria-hidden="true"><DepartmentMark slug={department.slug} /></span>
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
