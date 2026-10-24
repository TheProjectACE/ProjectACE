import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
export const metadata: Metadata = { title: "People", description: "Public contributor directory information for ProjectACE." };
export default function PeoplePage() {
 return <><PageIntro eyebrow="Contributors · Roles · Consent" title="The people behind the questions." description="A public team directory belongs here only when contributors and their roles have been confirmed and they have approved public display."/><section className="page-body"><div className="wrap"><div className="empty-state"><h2>No public directory configured yet</h2><p>To avoid inventing team members or exposing private information, profiles are not fabricated. Add approved biographies, roles, and portfolio links only after contributors consent.</p></div></div></section></>;
}
