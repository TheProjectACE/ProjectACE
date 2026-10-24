import Link from "next/link";
export default function NotFound() {
  return <section className="page-body"><div className="wrap"><div className="empty-state"><p className="eyebrow">404 / Not found</p><h1 style={{ fontFamily: "var(--display)" }}>This path is uncharted.</h1><p>The page may have moved, or that project or department has not been added.</p><div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 20 }}><Link className="button button-primary" href="/">Return home</Link><Link className="button button-secondary" href="/projects">Browse projects</Link></div></div></div></section>;
}
