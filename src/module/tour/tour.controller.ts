import { Request, Response } from 'express';
import { tourService } from './tour.service';

const createTour = async (req: Request, res: Response) => {
    // Create tour logic goes here
    try {
        const body = req.body;
        const result = await tourService.createTour(body);
        console.log('Received Body in createTour:', req.body);

    res.send({
      status: true,
      message: 'Tour created successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours();
    res.send({
      status: true,
      message: 'Tours fetched successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  // Single tour logic goes here
  try {
    const id = req.params.id;
    const result =await tourService.getSingleTour(id);
    res.send({
      status: true,
      message: 'Tour fetched successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await tourService.updateTour(id, body);

    res.send({
      status: true,
      message: 'Tour updated successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.deleteTour(id);

    res.send({
      status: true,
      message: 'Tour deleted successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Error deleting',
      error,
    });
  }
};
const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.getNextSchedule(id);

    res.send({
      success: true,
      message: 'Tour deleted successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
