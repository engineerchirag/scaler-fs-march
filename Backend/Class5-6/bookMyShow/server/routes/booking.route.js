import express from 'express';
import AuthMiddleware from '../middleware/auth.middleware.js';
import { createBooking, getBookingDetail, getPaymentClientSecret } from '../controllers/booking.controller.js';

const router = express.Router();

router.post('/get-payment-secret', AuthMiddleware, getPaymentClientSecret);

// Create Booking
router.post('/confirm', AuthMiddleware, createBooking);

// Get Booking details
router.get('/', AuthMiddleware, getBookingDetail);



export default router;
