import mongoose from "mongoose";

const AffiliateSchema = new mongoose.Schema(
  {
    keyword: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now }
  },
  { strict: true }
);

export default mongoose.model("Affiliate", AffiliateSchema);
