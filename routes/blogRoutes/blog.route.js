import express from 'express';
import { verifyToken } from '../../utils/verifyUser.js';
import {  create, deleteblog, getblogs, updateblog} from '../../controllers/blog.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getblogs', getblogs)
router.delete('/deletepost/:postId/:userId', verifyToken, deleteblog)
router.put('/updatepost/:postId/:userId', verifyToken, updateblog)


export default router;