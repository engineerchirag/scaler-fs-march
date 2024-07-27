import express from 'express';
import { createBlog, deleteBlogById, getAllBlog, getBlogById, renderBlogs, updateBlogById } from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/:blogId', getBlogById);

router.get('/', getAllBlog);

router.post('/', createBlog);

router.put('/:blogId', updateBlogById);

router.delete('/:blogId', deleteBlogById);

export default router;