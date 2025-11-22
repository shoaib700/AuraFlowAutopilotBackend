// controllers/autopilotController.js
import AffiliateEngine from "../engines/affiliateEngine.js";
import SEOEngine from "../engines/seoEngine.js";
import Stats from "../models/Stats.js";
import Logs from "../models/Logs.js";

export async function runAutopilot(req, res) {
  try {
    console.log("▶ Starting combined autopilot engine…");

    const affiliateResult = await AffiliateEngine();
    const seoResult = await SEOEngine();

    // Save run log
    await Logs.create({
      timestamp: new Date(),
      affiliate: affiliateResult,
      seo: seoResult
    });

    // Update cumulative stats
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

    return res.json({
      success: true,
      message: "Autopilot executed successfully",
      affiliateEngine: affiliateResult,
      seoEngine: seoResult
    });
  } catch (err) {
    console.error("❌ Autopilot failed:", err.message);
    return res.status(500).json({
      success: false,
      message: "Autopilot failed",
      error: err.message
    });
  }
}

export default runAutopilot;
