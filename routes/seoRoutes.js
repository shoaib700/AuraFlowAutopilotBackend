import express from "express";
import { getSEOPage, getAllSEOPages } from "../controllers/seoController.js";

const router = express.Router();

// GET all SEO pages
router.get("/", getAllSEOPages);

// GET specific SEO page by slug
router.get("/:slug", getSEOPage);

export default router;
