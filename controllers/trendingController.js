import Trending from "../models/Trending.js";

export async function getTrending(req, res) {
  const items = await Trending.find().sort({ createdAt: -1 }).limit(50);
  res.json(items);
}
