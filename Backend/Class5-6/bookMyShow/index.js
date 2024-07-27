import express from 'express';
import UserRoutes from './routes/user.route.js';
import TheatreRoutes from './routes/theatre.route.js';
import connectToDB from './database/mongoDb.js';
import 'dotenv/config';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

// APIs
app.use('/api/user', UserRoutes);
app.use('/api/theatre', TheatreRoutes);

app.all('*', (req, res) => {
    res.status(404).send("Page Not Found!");
})

app.listen(5010, () => {
    console.log('Server started at http://localhost:5010');
    connectToDB();
})
