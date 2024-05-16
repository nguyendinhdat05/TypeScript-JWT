"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.findAll();
            res.json(listProduct);
        };
        this.add = async (req, res) => {
            let product = await this.productService.add(req.body);
            res.json(product);
        };
        this.update = async (req, res) => {
            let product = await this.productService.edit(req.params.id, req.body);
            res.json(product);
        };
        this.delete = async (req, res) => {
            let product = await this.productService.delete(req.params.id);
            res.json(product);
        };
        this.productService = ProductService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map