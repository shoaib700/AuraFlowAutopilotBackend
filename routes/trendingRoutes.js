import express from "express";
import { getTrending } from "../controllers/trendingController.js";

const router = express.Router();

// GET trending topics
router.get("/", getTrending);

export default router;
