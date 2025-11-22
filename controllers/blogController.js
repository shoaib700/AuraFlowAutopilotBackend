import Blog from "../models/Blog.js";

export async function getAllBlogs(req, res) {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
}

export async function getBlogBySlug(req, res) {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) return res.status(404).json({ error: "Not found" });

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
