import {Router} from "express";
import UserController from "../controller/UserController";

const userRouter = Router();
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
export default userRouter;