import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// Application routes
import userRouter from "./app/modules/user/user.route";

// using cors
app.use(cors());

//Middleware - data parse
// here json or url data are parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api ---> app.use is get all api methods like get, put, update, delete
app.use("/api/v1/user", userRouter); // import route

export default app;
