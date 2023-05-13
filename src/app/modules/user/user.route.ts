import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminUsers); // static --> admins
router.get("/:id", getUserById); // dynamic route --> :id
router.post("/create-user", createUser);

export default router;
