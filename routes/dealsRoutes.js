import express from "express";
import {
  getAmazonDeals,
  getTemuDeals,
  getEbayDeals,
} from "../controllers/dealsController.js";

const router = express.Router();

// Amazon
router.get("/amazon", getAmazonDeals);

// Temu
router.get("/temu", getTemuDeals);

// eBay
router.get("/ebay", getEbayDeals);

export default router;
