import SEOPage from "../models/SEOPage.js";

export default async function SEOEngine() {
  try {
    const keywords = [
      "best gadgets 2025",
      "hot deals",
      "amazon trending"
    ];

    const results = [];

    for (const kw of keywords) {
      const slug = kw.toLowerCase().replace(/ /g, "-");
      const url = `/seo/${slug}`;

      const updated = await SEOPage.findOneAndUpdate(
        { slug },
        {
          keyword: kw,
          slug,
          url,
          updatedAt: new Date()
        },
        { upsert: true, new: true, strict: false }
      );

      results.push(updated);
    }

    return {
      status: "complete",
      pagesCreated: results.length,
      pages: results
    };
  } catch (err) {
    return { status: "failed", error: err.message };
  }
}
