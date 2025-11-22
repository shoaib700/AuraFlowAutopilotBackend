import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  affiliate: Object,
  seo: Object,
  blog: Object,
  trending: Object,
  status: { type: String, default: "completed" }
});

export default mongoose.model("Logs", LogSchema);
