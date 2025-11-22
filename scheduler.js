import cron from "node-cron";
import { runAutopilot } from "./controllers/autopilotController.js";

export default function startScheduler() {
  // Every hour
  cron.schedule("0 * * * *", async () => {
    console.log("⏳ Scheduled Autopilot Run Triggered…");
    await runAutopilot();
  });

  // Daily Auto Blog Publishing
  cron.schedule("0 2 * * *", async () => {
    console.log("📝 Auto Blog Generator Started…");
    const { generateBlogPost } = await import("./engines/blogEngine.js");
    await generateBlogPost();
  });

  // Daily SEO Page Generator
  cron.schedule("0 3 * * *", async () => {
    console.log("📈 Auto SEO Generator Started…");
    const { generateSEOPage } = await import("./engines/seoEngine.js");
    await generateSEOPage();
  });

  // Hourly Viral Trend Generator
  cron.schedule("0 * * * *", async () => {
    console.log("🔥 Viral Trend Generator Started…");
    const { generateViralTopic } = await import("./engines/viralEngine.js");
    await generateViralTopic();
  });

  console.log("⏱ Scheduler Ready");
}
