import axios from "axios";
import Deal from "../models/Deal.js";

export async function runAffiliateEngine() {
  try {
    const products = [
      { title: "Best Tech Deals", url: "https://www.amazon.com" },
      { title: "Best Home Deals", url: "https://www.amazon.com" },
      { title: "Trending Gadgets", url: "https://www.amazon.com" }
    ];

    for (const p of products) {
      await Deal.create({
        title: p.title,
        url: `${p.url}?tag=${process.env.AMAZON_TAG}`,
        platform: "amazon",
        keyword: p.title
      });
    }

    return { status: "ok", items: products.length };
  } catch (err) {
    return { status: "error", error: err.message };
  }
}
