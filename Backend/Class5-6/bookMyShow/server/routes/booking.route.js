import express from 'express';
import AuthMiddleware from '../middleware/auth.middleware.js';
import { createBooking, getBookingDetail, getPaymentClientSecret, makePayment } from '../controllers/booking.controller.js';

const router = express.Router();

// Make payment
router.post('/make-payment', AuthMiddleware, makePayment);

router.post('/get-payment-secret', AuthMiddleware, getPaymentClientSecret);

// Create Booking
router.post('/', AuthMiddleware, createBooking);

// Get Booking details
router.get('/', AuthMiddleware, getBookingDetail);



export default router;
