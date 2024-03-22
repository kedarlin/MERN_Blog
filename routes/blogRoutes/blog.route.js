import express from 'express';
import { verifyToken } from '../../utils/verifyUser.js';
import { create, deleteBlog, getBlog, updateBlog } from '../../controllers/blog.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getBlog', getBlog)
router.delete('/deleteBlog/:postId/:userId', verifyToken, deleteBlog)
router.put('/updateBlog/:postId/:userId', verifyToken, updateBlog)


export default router;