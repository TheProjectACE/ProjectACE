import Link from "next/link";
import { Brand } from "@/components/Brand";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <Link href="/" aria-label="ProjectACE home"><Brand footer /></Link>
          <span className="footer-copy">Curiosity into creation.</span>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/departments">Departments</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/research">Research</Link>
            <Link href="/join">Join</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {year} ProjectACE. Student-led research and learning.</span>
          <span><Link href="/about">About</Link> · <Link href="/contact">Privacy &amp; contact</Link></span>
        </div>
      </div>
    </footer>
  );
}
