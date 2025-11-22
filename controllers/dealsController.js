import Deal from "../models/Deal.js";

export async function getAmazonDeals(req, res) {
  const items = await Deal.find({ platform: "amazon" })
    .sort({ createdAt: -1 })
    .limit(50);
  res.json(items);
}

export async function getTemuDeals(req, res) {
  const items = await Deal.find({ platform: "temu" })
    .sort({ createdAt: -1 })
    .limit(50);
  res.json(items);
}

export async function getEbayDeals(req, res) {
  const items = await Deal.find({ platform: "ebay" })
    .sort({ createdAt: -1 })
    .limit(50);
  res.json(items);
}
