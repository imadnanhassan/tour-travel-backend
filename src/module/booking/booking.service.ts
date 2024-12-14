import mongoose from 'mongoose';
import TourModel from '../tour/tour.model';
import { IBooking } from './booking.interface';
import BookingModel from './booking.model';

const createBooking = async (payload: IBooking): Promise<IBooking> => {
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    const { tour, bookedSlots } = payload;

    const requiredTour = await TourModel.findById(tour);

    if (!requiredTour) {
      throw new Error('Tour not found');
    }

    const totalPrice = requiredTour.price * bookedSlots;

    payload.totalPrice = totalPrice;
    payload.bookingStatus = 'pending';

    if (requiredTour.availableSeats < bookedSlots) {
      throw new Error('Not enough seats available');
    }

    const booking = await BookingModel.create([payload], { session });

    console.log(booking);
    // throw new Error('Failed to create booking');

    // availableSeats = availableSeats - bookedSlots

    const updatedTour = await TourModel.findByIdAndUpdate(
      booking[0].tour,
      { $inc: { availableSeats: -bookedSlots } },
      { new: true, session }
    );

    console.log(updatedTour);

    if (!updatedTour) {
      throw new Error('Failed to update tour');
    }

    await session.commitTransaction();

    await session.endSession();

    return booking[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

export const bookingService = {
  createBooking,
};
