import mongoose from 'mongoose';

<<<<<<< HEAD
const blogSchema = new mongoose.Schema(
=======
const BlogSchema = new mongoose.Schema(
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

<<<<<<< HEAD
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
=======
const BlogPosts = mongoose.model('BlogPosts', BlogSchema);

export default BlogPosts;
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
