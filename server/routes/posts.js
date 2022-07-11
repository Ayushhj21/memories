import express from 'express';
import { updatePost } from '../../client/src/api/index.js';
import { getPosts,createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.update('/:id',updatePost)

export default router;
