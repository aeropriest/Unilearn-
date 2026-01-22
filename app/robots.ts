import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://www.uni-learn.online/sitemap.xml",
  }
}

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         disallow: "/",
//       },
//     ],
//     sitemap: "", // Optional: remove sitemap reference for staging
//   }
// }