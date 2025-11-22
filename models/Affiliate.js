import mongoose from "mongoose";

const AffiliateSchema = new mongoose.Schema({
  keyword: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const AffiliateModel = mongoose.model("Affiliate", AffiliateSchema);

export default AffiliateModel;
