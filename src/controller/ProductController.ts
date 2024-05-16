import {Request, Response} from "express";
import productService from "../service/ProductService";
import * as fs from "fs";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.findAll();
        res.json(listProduct);
    }
    add = async (req: Request, res: Response) => {
        let product = await this.productService.add(req.body);
        res.json(product);
    }
    update = async (req: Request, res: Response) => {
        let product =  await this.productService.edit(req.params.id,req.body);
        res.json(product);
    }
    delete = async (req: Request, res: Response) => {
        let product =  await this.productService.delete(req.params.id);
        res.json(product);
    }

}

export default new ProductController();
