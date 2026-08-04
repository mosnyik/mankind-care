import type { MetadataRoute } from "next";
import { homeCare, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    `/services/${homeCare.slug}`,
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
