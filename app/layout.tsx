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
    icon: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ibaCqsaebwsQ7kNvwG6Bb8Q&_nc_oc=AdoUDBCjHoLAE9023x9lHZ8X-sf8oYcz426S57fPkA_RldUAVTF8_V6s8PO68Huyj3E&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=SZSRw54tF6vlPVPRioyGJQ&_nc_ss=7b2a8&oh=00_AQQ4PPo83MF1g8kJ4sSL46N5_6V4SRK1BZr2LUNqaApG-g&oe=6AEA3787",
    shortcut: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ibaCqsaebwsQ7kNvwG6Bb8Q&_nc_oc=AdoUDBCjHoLAE9023x9lHZ8X-sf8oYcz426S57fPkA_RldUAVTF8_V6s8PO68Huyj3E&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=SZSRw54tF6vlPVPRioyGJQ&_nc_ss=7b2a8&oh=00_AQQ4PPo83MF1g8kJ4sSL46N5_6V4SRK1BZr2LUNqaApG-g&oe=6AEA3787",
    apple: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ibaCqsaebwsQ7kNvwG6Bb8Q&_nc_oc=AdoUDBCjHoLAE9023x9lHZ8X-sf8oYcz426S57fPkA_RldUAVTF8_V6s8PO68Huyj3E&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=SZSRw54tF6vlPVPRioyGJQ&_nc_ss=7b2a8&oh=00_AQQ4PPo83MF1g8kJ4sSL46N5_6V4SRK1BZr2LUNqaApG-g&oe=6AEA3787",
  },
  openGraph: {
    title: "ProjectACE — Curiosity into Creation",
    description: "Explore science, build useful ideas, and share the learning.",
    type: "website",
    images: [{ url: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ibaCqsaebwsQ7kNvwG6Bb8Q&_nc_oc=AdoUDBCjHoLAE9023x9lHZ8X-sf8oYcz426S57fPkA_RldUAVTF8_V6s8PO68Huyj3E&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=SZSRw54tF6vlPVPRioyGJQ&_nc_ss=7b2a8&oh=00_AQQ4PPo83MF1g8kJ4sSL46N5_6V4SRK1BZr2LUNqaApG-g&oe=6AEA3787", alt: "ProjectACE official logo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ibaCqsaebwsQ7kNvwG6Bb8Q&_nc_oc=AdoUDBCjHoLAE9023x9lHZ8X-sf8oYcz426S57fPkA_RldUAVTF8_V6s8PO68Huyj3E&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=SZSRw54tF6vlPVPRioyGJQ&_nc_ss=7b2a8&oh=00_AQQ4PPo83MF1g8kJ4sSL46N5_6V4SRK1BZr2LUNqaApG-g&oe=6AEA3787"],
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
