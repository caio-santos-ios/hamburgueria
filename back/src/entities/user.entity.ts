import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Order } from "./order.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({default: false})
    waiter: boolean;

    @Column({default: false})
    kitchen: boolean;
    
    @Column({default: false})
    isAdmin: boolean;

    @OneToMany(() => Order, order => order.user)
    orders: Order[]
    
    @BeforeInsert()
    payloadAdmin(){
        if(this.isAdmin) {
            this.kitchen = true
            this.waiter = true
        }
    }

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isHashPassword = getRounds(this.password)

        if(!isHashPassword) this.password = hashSync(this.password, 10)
    }
}