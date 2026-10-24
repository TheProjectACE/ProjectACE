import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectBrowser } from "@/components/ProjectBrowser";

export const metadata: Metadata = { title: "Projects", description: "Search ProjectACE project records by topic, department, and status." };

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ department?: string | string[] }> }) {
  const query = await searchParams;
  const rawDepartment = query.department;
  const initialDepartment = Array.isArray(rawDepartment) ? rawDepartment[0] : rawDepartment;
  return <><PageIntro eyebrow="Research & build log" title="The project library." description="Search ideas, studies, and documented work. Each project record describes the question, method, status, and limitations; examples are marked as demonstrations." /><section className="page-body"><div className="wrap"><ProjectBrowser initialDepartment={initialDepartment} /></div></section></>;
}
