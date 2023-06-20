import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        userEmail: {
            type: String,
        },
        tourName: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        guestSize: {
            type: Number,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        checkIn: {
            type: Date,
            required: true,
        },
        checkOut: {
            type: Date,
            required: true,
        },
        tours: [
            {
              type: mongoose.Types.ObjectId,
              ref: "Tour",
            },
          ],
        totalPrice:{
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
