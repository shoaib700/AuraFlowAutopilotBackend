import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database.js";
import autopilotRoutes from "./routes/autopilotRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import seoRoutes from "./routes/seoRoutes.js";
import trendingRoutes from "./routes/trendingRoutes.js";
import dealsRoutes from "./routes/dealsRoutes.js";
import startScheduler from "./scheduler.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Endpoints
app.use("/api/autopilot", autopilotRoutes);
app.use("/api/content", blogRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/trending", trendingRoutes);
app.use("/api/deals", dealsRoutes);

const PORT = 4000;

// Start server + database + scheduler
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🔥 Autopilot backend running on port ${PORT}`);

    console.log("⏱ Starting Autopilot Scheduler…");
    startScheduler();

    console.log("⚡ Running initial autopilot test run…");
    import("./controllers/autopilotController.js").then(({ runAutopilot }) => {
      runAutopilot().then((result) => {
        console.log("Initial autopilot result:", result?.status || "done");
      });
    });
  });
});
