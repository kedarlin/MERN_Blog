import { Router } from 'express';
import { createBlogPost, getAllBlogPosts, updateBlogPosts } from '../../controllers/blogController/blogController.js';

const router = Router();

router.post('/blogs', createBlogPost);
router.get('/blogs', getAllBlogPosts);
router.put('/blogs', updateBlogPosts);

export default router;
