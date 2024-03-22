import express from "express";
import  { deleteBlog, getBlogs, getBlog, logout, updateBlog } from '../../controllers/blogController.js';
import { verifyToken } from '../../utils/verifyUser.js';

const router = express.Router();

router.put('/Update/:userId',verifyToken, updateBlog);
router.delete('/Delete/:userId', verifyToken, deleteBlog);
router.put('/logout',logout);
router.get('/getBlogs', verifyToken, getBlogs);
router.get('/:userId',getBlog);

export default router;