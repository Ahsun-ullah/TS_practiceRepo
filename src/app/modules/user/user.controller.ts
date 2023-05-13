import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersToDB,
} from "./user.service";

// export normal bcz may have so many controller example: get, delete, update

// get api
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersToDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// post api
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get user by id

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get admin user by role: "admin"
export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUsersFromDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};
