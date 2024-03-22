<<<<<<< HEAD
import Blog from '../models/blog.model.js';
=======
import BlogPosts from '../models/blog.model.js';
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a blog'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newBlog = new Blog({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD
export const getblogs = async (req, res, next) => {
=======
export const getBlog = async (req, res, next) => {
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
<<<<<<< HEAD
    const blogs = await Blog.find({
=======
    const posts = await BlogPosts.find({
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.blogId && { _id: req.query.blogId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

<<<<<<< HEAD
    const totalBlogs = await Blog.countDocuments();
=======
    const totalPosts = await BlogPosts.countDocuments();
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

<<<<<<< HEAD
    const lastMonthBlogs = await Blog.countDocuments({
=======
    const lastMonthPosts = await BlogPosts.countDocuments({
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      blogs,
      totalBlogs,
      lastMonthBlogs,
    });
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD
export const deleteblog = async (req, res, next) => {
=======
export const deleteBlog = async (req, res, next) => {
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this Blog'));
  }
  try {
<<<<<<< HEAD
    await Blog.findByIdAndDelete(req.params.blogId);
    res.status(200).json('The blog has been deleted');
=======
    await BlogPosts.findByIdAndDelete(req.params.postId);
    res.status(200).json('The post has been deleted');
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD
export const updateblog = async (req, res, next) => {
=======
export const updateBlog = async (req, res, next) => {
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this Blog'));
  }
  try {
<<<<<<< HEAD
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.blogId,
=======
    const updatedPost = await BlogPosts.findByIdAndUpdate(
      req.params.postId,
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};