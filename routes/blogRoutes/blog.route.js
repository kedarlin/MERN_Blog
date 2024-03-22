import express from 'express';
import { verifyToken } from '../../utils/verifyUser.js';
<<<<<<< HEAD
import {  create, deleteblog, getblogs, updateblog} from '../../controllers/blog.controller.js';
=======
import { create, deleteBlog, getBlog, updateBlog } from '../../controllers/blog.controller.js';
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d

const router = express.Router();

router.post('/create', verifyToken, create)
<<<<<<< HEAD
router.get('/getblogs', getblogs)
router.delete('/deletepost/:postId/:userId', verifyToken, deleteblog)
router.put('/updatepost/:postId/:userId', verifyToken, updateblog)
=======
router.get('/getBlog', getBlog)
router.delete('/deleteBlog/:postId/:userId', verifyToken, deleteBlog)
router.put('/updateBlog/:postId/:userId', verifyToken, updateBlog)
>>>>>>> ac975e47784b29e9d4c9dfd1ebd9d0beeb47705d


export default router;