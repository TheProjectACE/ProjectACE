import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { publicAnnouncements } from "@/lib/data";
export const metadata: Metadata = { title: "News & updates", description: "ProjectACE announcements and dated project updates." };
export default function NewsPage() {
 return <><PageIntro eyebrow="News · Milestones · Updates" title="Progress, documented." description="Updates should be dated and linked to the project record or evidence behind them. Proposed work should not be presented as an achievement."/><section className="page-body"><div className="wrap">{publicAnnouncements.length ? <div className="work-list">{publicAnnouncements.map((item) => <article className="work-row" key={item.title + item.date}><span className="kicker">{item.date}</span><h2>{item.title}</h2><p>{item.summary}</p></article>)}</div> : <div className="empty-state"><h2>No public updates have been added</h2><p>When a milestone is ready, publish a dated update linked to the related project and describe what was actually completed.</p></div>}</div></section></>;
}
