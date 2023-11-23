import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, Between, BeforeUpdate, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Table } from "./table.entity";
import { Food } from "./food.entity";
import { User } from "./user.entity";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({default: true})
    isOpen: boolean;

    @Column({default: false})
    isDone: boolean;

    @Column()
    quanty: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    valueTotal: number;

    @ManyToOne(() => Table, table => table.orders)
    table: Table;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToOne(() => Food, food => food.orders)
    food: Food;
}