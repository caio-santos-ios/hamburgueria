import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Between, BeforeUpdate, ManyToOne, OneToMany } from "typeorm";
import { Order } from "./order.entity";

export enum CategoryFood {
    DRINK = "drink",
    SNACK = "snack",
    DESSERT = "dessert",
    OTHERS = "others"
}

@Entity('foods')
export class Food {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({length: 100, unique: true})
    name: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;

    @Column({type: 'enum', enum: CategoryFood, default: CategoryFood.OTHERS})
    category: CategoryFood;

    @OneToMany(() => Order, order => order.food, { onDelete: 'CASCADE' })
    orders: Order[];
}