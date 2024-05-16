import { ProductPro } from "../entity/product";
import { Service } from "./Service";
declare class ProductService implements Service<ProductPro> {
    private productRepository;
    constructor();
    findAll: () => Promise<any>;
    add: (product: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
