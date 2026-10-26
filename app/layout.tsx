import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  icons: {
    icon: [{ url: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0cYP_8SHQa8Q7kNvwFtb-2c&_nc_oc=AdovEZt00dCi9j-PtG3KyjpuvWV0zxuZsKbAtVeKPOYefrqIvTwqotLLY8Pd5trxS4w&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=WcnGfCmzKlD-Y1vYfN0hxw&_nc_ss=7b2a8&oh=00_AQMQnEcnuK8zhbOU6K1AEMKlU9Yw1vpoFfYwCkDjDZIAgw&oe=6AE59A47", type: "image/jpeg" }],
    shortcut: ["https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0cYP_8SHQa8Q7kNvwFtb-2c&_nc_oc=AdovEZt00dCi9j-PtG3KyjpuvWV0zxuZsKbAtVeKPOYefrqIvTwqotLLY8Pd5trxS4w&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=WcnGfCmzKlD-Y1vYfN0hxw&_nc_ss=7b2a8&oh=00_AQMQnEcnuK8zhbOU6K1AEMKlU9Yw1vpoFfYwCkDjDZIAgw&oe=6AE59A47"],
    apple: [{ url: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0cYP_8SHQa8Q7kNvwFtb-2c&_nc_oc=AdovEZt00dCi9j-PtG3KyjpuvWV0zxuZsKbAtVeKPOYefrqIvTwqotLLY8Pd5trxS4w&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=WcnGfCmzKlD-Y1vYfN0hxw&_nc_ss=7b2a8&oh=00_AQMQnEcnuK8zhbOU6K1AEMKlU9Yw1vpoFfYwCkDjDZIAgw&oe=6AE59A47", type: "image/jpeg" }],
  },
  openGraph: {
    title: "ProjectACE — Curiosity into Creation",
    description: "Explore science, build useful ideas, and share the learning.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
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
