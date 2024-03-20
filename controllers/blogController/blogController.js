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
  const BlogPostid =  req.params.blogs;
  const updateData = req.body; 
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(BlogPostid, updateData, { new: true });
    
    if (updatedBlogPost) {
      res.json(updatedBlogPost);
    } else {
      res.status(404).json({ message: "updation not found. "});
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

