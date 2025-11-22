import Deal from "../models/Deal.js";

export async function generateDeals() {
  const products = [
    "Wireless Earbuds",
    "Smartwatch Pro",
    "Gaming Mouse",
    "Laptop Stand",
    "USB-C Charger"
  ];

  for (let item of products) {
    await Deal.create({
      title: item,
      url: `https://www.amazon.com/s?k=${encodeURIComponent(item)}&tag=${process.env.AMAZON_TAG}`,
      platform: "amazon",
      keyword: item
    });
  }

  return { status: "deals_generated", count: products.length };
}
