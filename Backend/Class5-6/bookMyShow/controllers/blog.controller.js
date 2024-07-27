import fs from 'fs';
import Blog from '../model/blog.model.js';

export const getAllBlog = async (req, res) => {
    try {
        const allBlogsData = await Blog.find({});
        res.status(200).send(allBlogsData);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blogData = await Blog.findById(blogId);
        res.status(200).send(blogData);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const deleteBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const data = await Blog.findByIdAndDelete(blogId);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const createBlog = async (req, res) => {
    try {
        const newBlogData = req.body;
        const data = await Blog.create(newBlogData);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
} 

export const updateBlogById = async (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;
        const data = await Blog.updateOne({ _id: blogId }, {$set: newBlogData})
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e.message);
    }
}

export const renderBlogs = async (req, res) => {
    const blogs = await Blog.find({});
    res.render('blogList', { blogs });
}
export const renderBlogById = async (req, res) => {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId);
    res.render('blogDetail', { blog });
}