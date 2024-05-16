import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class ProductPro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'text'})
    image: string;

    @ManyToOne(() => Category , (category)=> category.id)
    category : Category

}
