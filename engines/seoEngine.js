import SEOPage from "../models/SEOPage.js";
import { slugify } from "../utils/slugify.js";

export async function generateSEOPage() {
  const topics = [
    "Best travel hacks 2025",
    "How to save money on flights",
    "Popular shopping trends",
    "Best budget gadgets",
    "Healthy lifestyle tips"
  ];

  const keyword = topics[Math.floor(Math.random() * topics.length)];
  const slug = slugify(keyword);

  const content = `
    <h2>${keyword}</h2>
    <p>This guide explains everything about ${keyword}.</p>
    <p>Top tips and insights updated automatically.</p>
  `;

  await SEOPage.create({
    title: keyword,
    slug,
    content,
    keyword
  });

  return { status: "created", keyword, slug };
}
