import {Router} from "express";
import productController from "../controller/ProductController";
import {auths} from "../middleware/auths";

const productRouter = Router();
productRouter.use(auths)
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.add);
productRouter.delete('/:id', productController.delete);
productRouter.put('/:id', productController.update);
export default productRouter;
