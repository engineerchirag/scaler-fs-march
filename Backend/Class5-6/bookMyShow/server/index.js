import express from 'express';
import UserRoutes from './routes/user.route.js';
import TheatreRoutes from './routes/theatre.route.js';
import MovieRoutes from './routes/movie.route.js';
import ShowRoutes from './routes/show.route.js';
import BookingRoutes from './routes/booking.route.js';
import connectToDB from './database/mongoDb.js';
import cors from 'cors';
import nodemailer  from 'nodemailer';
import 'dotenv/config';
import { Server } from 'socket.io';
import http from 'http';


export const transporter = nodemailer.createTransport({
    host: "smtp.mandrillapp.com",
    port: 587,
    auth: {
        user: 'xyz@gmail.com',
        pass: process.env.mailchimp_key
    }
})

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());

// APIs
app.use('/api/user', UserRoutes);
app.use('/api/theatre', TheatreRoutes);
app.use('/api/movie', MovieRoutes);
app.use('/api/show', ShowRoutes);
app.use('/api/booking', BookingRoutes);


app.all('*', (req, res) => {
    res.status(404).send("Page Not Found!");
})

const PORT = process.env.port || 5001;
// app.listen(PORT, () => {
//     console.log(`Server started at http://localhost:${PORT}`);
//     connectToDB();
// })

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3001"
    }
  });

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('message', (msg) => {
        console.log(msg);
        io.emit('message', msg);
    })
    socket.on('message2', (msg) => {
        console.log(msg);
        io.emit('message2', msg);
    })
})

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    connectToDB();
})