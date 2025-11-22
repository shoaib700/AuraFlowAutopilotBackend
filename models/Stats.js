import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
  earnings: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
  seo_pages: { type: Number, default: 0 },
  blogs_published: { type: Number, default: 0 },
  trending_generated: { type: Number, default: 0 },
});

export default mongoose.model("Stats", StatsSchema);
