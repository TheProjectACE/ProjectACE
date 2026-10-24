import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "ProjectACE — Curiosity into Creation",
    template: "%s | ProjectACE",
  },
  description:
    "A student-led science, engineering, research, and creative technology initiative exploring the natural world and developing affordable ideas.",
  metadataBase: new URL("https://projectacebd.vercel.app"),
  openGraph: {
    title: "ProjectACE — Curiosity into Creation",
    description: "Explore science, build useful ideas, and share the learning.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
