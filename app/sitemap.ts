import { MetadataRoute } from "next";

const paths = [
  { path: "", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/demo", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
  {
    path: "/blog/esg-reporting-saudi-arabia",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/blog/ghg-emissions-tracking-saudi-arabia",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/blog/net-zero-planning-saudi-arabia",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/blog/ifrs-s1-s2-saudi-arabia",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/blog/esg-software-middle-east",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/blog/carbon-footprint-measurement-saudi-arabia",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://urimpact.sa";
  const now = new Date();

  return paths.flatMap(({ path, changeFrequency, priority }) => [
    {
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    },
    {
      url: `${base}/ar${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    },
  ]);
}
