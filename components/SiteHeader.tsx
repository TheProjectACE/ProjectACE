"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brand } from "@/components/Brand";

const links = [
  { href: "/departments", label: "Departments" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/datasets", label: "Datasets" },
  { href: "/lab", label: "ACE Lab" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" aria-label="ProjectACE home"><Brand /></Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="primary-navigation" className={"nav-links" + (open ? " is-open" : "")} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(link.href + "/") ? "page" : undefined} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="button button-primary button-small" href="/join" onClick={() => setOpen(false)}>Join ProjectACE <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
