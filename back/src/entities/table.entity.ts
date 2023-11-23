import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./order.entity";

@Entity('tables')
export class Table {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'integer'})
    tableNumber: number;
    
    @OneToMany(() => Order, order => order.table)
    orders: Order[];
}