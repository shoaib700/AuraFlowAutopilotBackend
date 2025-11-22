import { runAffiliateEngine } from "../engines/affiliateEngine.js";
import { generateSEOPage } from "../engines/seoEngine.js";
import { generateBlogPost } from "../engines/blogEngine.js";
import { generateViralTopic } from "../engines/viralEngine.js";
import { generateDeals } from "../engines/dealsEngine.js";
import Logs from "../models/Logs.js";

export async function runAutopilot() {
  try {
    console.log("🚀 Autopilot started...");

    const affiliateResult = await runAffiliateEngine();
    const seoResult = await generateSEOPage();
    const blogResult = await generateBlogPost();
    const viralResult = await generateViralTopic();
    const dealsResult = await generateDeals();

    const logEntry = await Logs.create({
      affiliate: affiliateResult,
      seo: seoResult,
      blog: blogResult,
      trending: viralResult,
      status: "completed",
    });

    return {
      status: "success",
      affiliate: affiliateResult,
      seo: seoResult,
      blog: blogResult,
      viral: viralResult,
      deals: dealsResult,
      log: logEntry,
    };

  } catch (error) {
    console.error("❌ Autopilot Error:", error.message);
    return { status: "error", error: error.message };
  }
}
