import express from "express";
import { runAutopilot } from "../controllers/autopilotController.js";

const router = express.Router();

router.get("/run", async (req, res) => {
  const result = await runAutopilot();
  res.json(result);
});

export default router;
