import Stats from "../models/Stats.js";
import Affiliate from "../models/Affiliate.js";
import SEOPage from "../models/SEOPage.js";

export default async function updateStats() {
  const affiliateCount = await Affiliate.countDocuments();
  const seoCount = await SEOPage.countDocuments();

  const summary = {
    affiliatePages: affiliateCount,
    seoPages: seoCount,
    updated: Date.now()
  };

  await Stats.findOneAndUpdate({}, summary, { upsert: true });

  return summary;
}
