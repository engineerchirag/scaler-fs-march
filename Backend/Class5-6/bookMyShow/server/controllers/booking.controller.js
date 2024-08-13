import { transporter } from "../index.js";
import Booking from "../model/booking.model.js";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51LWoczSHyBJaG3xB0ZdWN0NkzwDlgYsj1r06I5P7tIxk49QFzIkmwaL28tJHB8PsyZXc2TcN6zMxw0FMXCxYRRRd00rz1ngsX5"
);

export const getPaymentClientSecret = async (req, res) => {
  try {
    const bookingDetails = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: bookingDetails.seats * bookingDetails.price * 100,
      currency: "inr",
      payment_method_types: ["card"],
      metadata: {
        showId: bookingDetails.showId,
        seats: bookingDetails.seats,
      },
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

    const paymentIntent = await stripe.paymentIntents.retrieve(
      bookingDetails.transactionId
    );
    const booking = new Booking({
      ...bookingDetails,
      seats: paymentIntent.metadata.seats,
      show: paymentIntent.metadata.showId,
    });
    booking.user = req.user.id;
    await booking.save();

    const info = await transporter.sendMail({
        from: '"Chirag Goel" <xyz@gmail.com>', // sender address
        to: "x@gmail.com, y@gmail.com", // list of receivers
        subject: "Booking is confirmed", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

    res.send({
      success: true,
      message: "Booking is confirm",
    });

  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

export const getBookingDetail = async (req, res) => {
  try {
    const bookingDetail = await Booking.find()
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
