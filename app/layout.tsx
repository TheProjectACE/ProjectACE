import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionEffects } from "@/components/MotionEffects";

export const metadata: Metadata = {
  title: {
    default: "ProjectACE — Curiosity into Creation",
    template: "%s | ProjectACE",
  },
  description:
    "A student-led science, engineering, research, and creative technology initiative exploring the natural world and developing affordable ideas.",
  metadataBase: new URL("https://projectacebd.vercel.app"),
  icons: {
    icon: "/projectace-logo.png",
    shortcut: "/projectace-logo.png",
    apple: "/projectace-logo.png",
  },
  openGraph: {
    title: "ProjectACE — Curiosity into Creation",
    description: "Explore science, build useful ideas, and share the learning.",
    type: "website",
    images: [{ url: "/projectace-logo.png", alt: "ProjectACE official logo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/projectace-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <MotionEffects />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
