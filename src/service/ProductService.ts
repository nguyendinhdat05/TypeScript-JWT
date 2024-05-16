import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Service} from "./Service";

class ProductService implements Service<ProductPro>{
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(ProductPro);
    }

    findAll = async () => {
    let listProducts = await this.productRepository.find({
        relations: ["category"]
    });
    return listProducts;
}

    add = async (product) => {
       return  await this.productRepository.save(product)
    }

    delete = async (id) =>{
       return await this.productRepository.delete(id)
    }

    edit = async (id, data)=> {
      return  await this.productRepository.update(id,data)
    }

    findById = async (id) => {
        let product = await this.productRepository.find({where : {id : id}})
        return product;
    }
}

export default new ProductService();
