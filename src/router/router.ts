import {Router} from "express";
import productRouter from "./productRouter";
import userRouter from "./userRouter";

const router = Router();
router.use('/api/products', productRouter);
router.use('/api/user', userRouter)
export default router;
