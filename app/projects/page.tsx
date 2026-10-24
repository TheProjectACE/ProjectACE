import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectBrowser } from "@/components/ProjectBrowser";

export const metadata: Metadata = { title: "Projects", description: "Search ProjectACE project records by topic, department, and status." };

export default function ProjectsPage() {
  return <><PageIntro eyebrow="Research & build log" title="The project library." description="Search ideas, studies, and documented work. Each project record describes the question, method, status, and limitations; examples are marked as demonstrations." /><section className="page-body"><div className="wrap"><ProjectBrowser /></div></section></>;
}
