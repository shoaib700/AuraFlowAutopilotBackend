import mongoose from "mongoose";

const TrendingSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  source: String,       // e.g. google trends, twitter, AI generated
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Trending", TrendingSchema);
