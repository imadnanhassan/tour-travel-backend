import { model, Schema } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema(
  {
    tour: { type: Schema.Types.ObjectId, ref: 'Tour', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const BookingModel = model<IBooking>('Booking', bookingSchema);
export default BookingModel;
