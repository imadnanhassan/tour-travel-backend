// create bookign
// get all booking
// get booking by id
// get boong by user id =  my Booking
// update booking
// delete booking = soft delete booking

import { Router } from 'express';

const bookingRouter = Router();

bookingRouter.post('/create-booking');

export default bookingRouter;
