import BlogPost from '../../models/newBlog.js';

export async function createBlogPost(req, res) {
  try {
    const newBlogPost = new BlogPost(req.body);
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllBlogPosts(req, res) {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateBlogPosts(req,res)  {
  try {
    const { id } = req.params;
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBlogPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteBlogPosts(req,res) {
  const idBlog = req.params.id;
  try {
    const deletedBlog = await BlogPost.findByIdAndDelete(idBlog);
    
    if (deletedBlog) {
      res.json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "blog not found." });
    }
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


