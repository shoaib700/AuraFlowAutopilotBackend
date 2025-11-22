import express from "express";
import { getAllBlogs, getBlogBySlug } from "../controllers/blogController.js";

const router = express.Router();

// GET all blogs
router.get("/blog", getAllBlogs);

// GET single blog
router.get("/blog/:slug", getBlogBySlug);

export default router;
