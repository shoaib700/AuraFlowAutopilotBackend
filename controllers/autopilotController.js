import AffiliateEngine from "../engines/affiliateEngine.js";
import SEOEngine from "../engines/seoEngine.js";
import Stats from "../models/Stats.js";
import Logs from "../models/Logs.js";

export async function runAutopilot(req = null, res = null) {
  try {
    console.log("▶ Starting combined autopilot engine…");

    const affiliateResult = await AffiliateEngine();
    const seoResult = await SEOEngine();

    await Logs.create({
      timestamp: new Date(),
      affiliate: affiliateResult,
      seo: seoResult
    });

    await Stats.findOneAndUpdate(
      {},
      {
        $inc: {
          earnings: affiliateResult.estimatedRevenue || 0,
          clicks: affiliateResult.generatedLinks || 0,
          seo_pages: seoResult.pagesCreated || 0
        }
      },
      { upsert: true }
    );

    console.log("✓ Autopilot completed");

    if (!res) return { success: true }; // scheduler FIX

    return res.json({
      success: true,
      message: "Autopilot executed successfully",
      affiliateEngine: affiliateResult,
      seoEngine: seoResult
    });

  } catch (err) {
    console.error("❌ Autopilot failed:", err.message);

    if (!res) return { success: false, error: err.message }; // scheduler FIX

    return res.status(500).json({
      success: false,
      message: "Autopilot failed",
      error: err.message
    });
  }
}

export default runAutopilot;
