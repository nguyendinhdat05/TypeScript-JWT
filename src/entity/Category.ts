import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductPro} from "./product";
import productRouter from "../router/productRouter";

@Entity ()
export class Category {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    name : String;
    @OneToMany(()=> ProductPro , (product)=> product.category )
    product: ProductPro[]
}
