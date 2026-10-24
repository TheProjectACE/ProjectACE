import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { CsvExplorer } from "@/components/CsvExplorer";
import { OrbitSimulator } from "@/components/OrbitSimulator";
export const metadata: Metadata = { title: "ACE Lab", description: "Explore scientific CSV data in your browser or use an illustrative orbital geometry demonstration." };
export default function LabPage() {
  return <><PageIntro eyebrow="ACE Lab · Tools for learning" title="Explore data. Test assumptions." description="Start with a real, local CSV analysis tool and an educational orbit illustration. Both explain their limits so visualizations are not mistaken for validated scientific conclusions." /><section className="page-body"><div className="wrap" style={{ display: "grid", gap: 26 }}><CsvExplorer /><OrbitSimulator /></div></section></>;
}
