import SEOPage from "../models/SEOPage.js";

export async function getSEOPage(req, res) {
  try {
    const page = await SEOPage.findOne({ slug: req.params.slug });

    if (!page) return res.status(404).json({ error: "Not found" });

    res.json(page);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAllSEOPages(req, res) {
  const pages = await SEOPage.find().sort({ createdAt: -1 });
  res.json(pages);
}
