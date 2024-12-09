import express, { Request, Response } from "express";
import userRouter from "./module/user/user.route";

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server Live ⚡",
  });
});

export default app;
