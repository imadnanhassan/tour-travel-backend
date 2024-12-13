import { ITour } from './tour.interface';
import TourModel from './tour.model';

const createTour = async (payload: ITour) => {
  const result = await TourModel.create(payload);
  return result;
};

const getTours = async () => {
  const result = await TourModel.find();
  return result;
};

const getSingleTour = async (id: string) => {
  const result = await TourModel.findOne({ id });
  return result;
};

const updateTour = async (id: string, payload: Partial<ITour>) => {
  const result = await TourModel.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  return result;
};

const deleteTour = async (id: string) => {
  const result = await TourModel.findOneAndDelete({ id });
  return result;
};
const getNextSchedule = async (id: string) => {
  const tour = await TourModel.getNextNearestStartDateAndEndData();
  //   const nextSchedule = tour?.getNextNearestStartDateAndEndData()

  return {
    tour,
    // nextSchedule,
  };
};
export const tourService = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
