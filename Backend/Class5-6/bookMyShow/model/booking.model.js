import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    seats: {
      type: [String],
      required: true,
    },
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shows",
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model("bookings", bookingSchema);

export default Booking;
