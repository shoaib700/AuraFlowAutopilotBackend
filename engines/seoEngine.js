// engines/seoEngine.js
import SEOPage from "../models/SEOPage.js";

export default async function SEOEngine() {
  try {
    const keywords = [
      "best gadgets 2025",
      "hot deals",
      "amazon trending"
    ];

    const pages = [];

    for (const kw of keywords) {
      const slug = kw.toLowerCase().replace(/ /g, "-");

      const url = `/seo/${slug}`;

      // FIX: UPSERT instead of create()
      const updated = await SEOPage.findOneAndUpdate(
        { slug },
        {
          keyword: kw,
          slug,
          url,
          updatedAt: new Date()
        },
        { upsert: true, new: true }
      );

      pages.push(updated);
    }

    return {
      status: "complete",
      pagesCreated: pages.length,
      pages
    };
  } catch (err) {
    console.error("SEO Engine Error:", err.message);
    return { status: "failed", error: err.message };
  }
}
