import mongoose from "mongoose";

const SEOPageSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  keyword: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("SEOPage", SEOPageSchema);
