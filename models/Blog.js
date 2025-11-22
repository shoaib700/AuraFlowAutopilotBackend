import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  summary: String,
  content: String,
  date: { type: Date, default: Date.now },
  keywords: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", BlogSchema);
