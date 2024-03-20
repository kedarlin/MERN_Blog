import { Router } from 'express';
import { createBlogPost, deleteBlogPosts, getAllBlogPosts, updateBlogPosts } from '../../controllers/blogController/blogController.js';

const router = Router();

router.post('/blogs', createBlogPost);
router.get('/blogs', getAllBlogPosts);
router.put('/blogs/:id', updateBlogPosts);
router.delete('/blogs/:id',deleteBlogPosts);

export default router;
