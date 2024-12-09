import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userService.createUser(payload);

    res.json({
      status: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "An error occurred while creating the user",
      data: error,
    });
  }
};

export const userController = {
  createUser,
};
