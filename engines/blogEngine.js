import Blog from "../models/Blog.js";
import { slugify } from "../utils/slugify.js";

export async function generateBlogPost() {
  const subjects = [
    "How to Make Passive Income in 2025",
    "Top Trending Gadgets",
    "Saving Money While Shopping Online",
    "Amazon Trending Products Review",
    "Best Travel Destinations"
  ];

  const title = subjects[Math.floor(Math.random() * subjects.length)];
  const slug = slugify(title);

  const content = `
    <p>${title} is one of the most searched topics right now.</p>
    <p>This article explains everything.</p>
    <p>Updated automatically by AuraFlow AI.</p>
  `;

  await Blog.create({
    title,
    summary: "Automatically generated blog post.",
    slug,
    content,
    keywords: title.split(" ")
  });

  return { status: "blog_generated", slug };
}
