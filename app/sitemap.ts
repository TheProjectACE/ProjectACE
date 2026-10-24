import type { MetadataRoute } from "next";
import { departments, projects } from "@/lib/data";
const baseUrl = "https://projectacebd.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
 const stable = ["/", "/departments", "/projects", "/research", "/datasets", "/lab", "/people", "/news", "/join", "/about", "/contact"];
 return [...stable.map((path) => ({ url: baseUrl + path, lastModified: new Date("2026-10-24"), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })), ...departments.map((d) => ({ url: baseUrl + "/departments/" + d.slug, lastModified: new Date("2026-10-24"), changeFrequency: "monthly" as const, priority: 0.65 })), ...projects.map((p) => ({ url: baseUrl + "/projects/" + p.slug, lastModified: new Date(p.updated), changeFrequency: "monthly" as const, priority: 0.55 }))];
}
