import mongoose from "mongoose";

const DealSchema = new mongoose.Schema({
  title: String,
  url: String,
  platform: String,   // amazon / ebay / temu
  price: String,
  keyword: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Deal", DealSchema);
