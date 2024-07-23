import express from 'express';
import UserRoutes from './routes/user.route.js'; 
import BlogRoutes from './routes/blog.route.js';
import connectToDB from './database/mongoDb.js';

const app = express();

app.use(express.json());
app.use('/api/user', UserRoutes);
app.use('/api/blog', BlogRoutes);

app.all('*', (req, res) => {
    res.status(404).send("Page Not Found!");
})

app.listen(5010, () => {
    console.log('Server started at http://localhost:5010');
    connectToDB();
})
