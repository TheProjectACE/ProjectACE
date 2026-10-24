import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { DepartmentCard } from "@/components/DepartmentCard";
import { departments } from "@/lib/data";

export const metadata: Metadata = { title: "Departments", description: "Explore the six ProjectACE research and creative technology departments." };

export default function DepartmentsPage() {
  return <><PageIntro eyebrow="Six fields · Shared method" title="Explore the departments." description="Each department has its own questions, tools, and research themes. Start with the field that interests you and follow it toward a practical investigation." /><section className="page-body"><div className="wrap"><div className="department-grid">{departments.map((department) => <DepartmentCard key={department.slug} department={department} />)}</div></div></section></>;
}
