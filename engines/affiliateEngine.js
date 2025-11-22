import Affiliate from "../models/Affiliate.js";

export default async function AffiliateEngine() {
  try {
    const keywords = [
      "best gadgets 2025",
      "top deals",
      "amazon trending products"
    ];

    const results = [];

    for (const kw of keywords) {
      const slug = kw.toLowerCase().replace(/ /g, "-");

      const url = `https://www.amazon.com/s?k=${encodeURIComponent(
        kw
      )}&tag=auraflowai-20`;

      const updated = await Affiliate.findOneAndUpdate(
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
      generatedLinks: results.length,
      estimatedRevenue: results.length * 0.15,
      links: results
    };
  } catch (err) {
    return { status: "failed", error: err.message };
  }
}
