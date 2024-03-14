import { Router } from 'express';
import { createBlogPost, getAllBlogPosts } from '../../controllers/blogController/blogController.js';

const router = Router();

router.post('/blogs', createBlogPost);
router.get('/blogs', getAllBlogPosts);

export default router;