import fs from 'fs';

export const getAllBlog = (req, res) => {
    try {
        const blogData = fs.readFileSync('mocks/blog.mock.json');
        res.status(200).send(JSON.parse(blogData));
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const getBlogById = (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blogData = fs.readFileSync('mocks/blog.mock.json');
        const blogDataById = JSON.parse(blogData).find(blog => blog.id == blogId);
        res.status(200).send(blogDataById);
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const deleteBlogById = (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        blogData.splice(blogIndexDataById, 1);
        fs.writeFileSync('mocks/blog.mock.json', JSON.stringify(blogData));
        res.status(200).send("Blog deleted");
    } catch(e) {
        res.status(500).send(e.message);
    } 
}

export const createBlog = (req, res) => {
    try {
        const newBlogData = req.body;
        let blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        blogData = [...blogData, newBlogData];
        fs.writeFileSync('mocks/blog.mock.json', JSON.stringify(blogData));
        res.status(200).send("Blog created successfully!");
    } catch(e) {
        res.status(500).send(e.message);
    }
} 

export const updateBlogById = (req, res) => {
    try {
        const newBlogData = req.body;
        const blogId = req.params.blogId;
        let blogData = JSON.parse(fs.readFileSync('mocks/blog.mock.json'));
        const blogIndexDataById = blogData.findIndex(blog => blog.id == blogId);
        blogData[blogIndexDataById] = {  ...blogData[blogIndexDataById], ...newBlogData };
        fs.writeFileSync('mocks/blog.mock.json', JSON.stringify(blogData));
        res.status(200).send("Blog updated successfully!");
    } catch(e) {
        res.status(500).send(e.message);
    }
}