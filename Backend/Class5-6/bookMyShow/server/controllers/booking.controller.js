import Booking from "../model/booking.model.js";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51LWoczSHyBJaG3xB0ZdWN0NkzwDlgYsj1r06I5P7tIxk49QFzIkmwaL28tJHB8PsyZXc2TcN6zMxw0FMXCxYRRRd00rz1ngsX5"
);

export const makePayment = async (req, res) => {
  try {
    // TODO: Make payment to stripe and return transaction Id
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const getPaymentClientSecret = async (req, res) => {
  try {
    const bookingDetails = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount:  100, // bookingDetails.seats * bookingDetails.price,
      currency: "usd",
      payment_method_types: ['card'],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const createBooking = async (req, res) => {
  try {
    // UserId > req.user (jwt token)
    // Transaction Id > req.transactionId (get transaction details from /make-payment)
    // Seats > req.seats (verify if selected seats are really available, updated bookedSeats in Show collection)
    // showId > req.showId

    const bookingDetails = req.body;
    const booking = new Booking(bookingDetails);
    booking.user = req.user.id;
    await booking.save();

    // TODO: verify if selected seats are really available, updated bookedSeats in Show collection
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const getBookingDetail = async (req, res) => {
  try {
    const bookingId = req.query;
    const bookingDetail = await Booking.findById(bookingId)
      .populate("user")
      .populate({
        path: "show",
        model: "shows",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        model: "shows",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });
    res.send(bookingDetail);
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};
