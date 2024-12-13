import express, { NextFunction, Request, Response } from 'express';
import userRouter from './module/user/user.route';
import tourRouter from './module/tour/tour.route';
import { StatusCodes } from 'http-status-codes';

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/tour', tourRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('error from app.ts global error', err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err });
});

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
