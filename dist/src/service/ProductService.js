"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.findAll = async () => {
            let listProducts = await this.productRepository.find({
                relations: ["category"]
            });
            return listProducts;
        };
        this.add = async (product) => {
            return await this.productRepository.save(product);
        };
        this.delete = async (id) => {
            return await this.productRepository.delete(id);
        };
        this.edit = async (id, data) => {
            return await this.productRepository.update(id, data);
        };
        this.findById = async (id) => {
            let product = await this.productRepository.find({ where: { id: id } });
            return product;
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.ProductPro);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map