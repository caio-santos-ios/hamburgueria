import { AppDataSource } from "./data-source";
import { User } from "./entities/user.entity";
import { Order } from "./entities/order.entity";
import { Food } from "./entities/food.entity";
import { Table } from "./entities/table.entity";

export const userRepository = AppDataSource.getRepository(User)
export const orderRepository = AppDataSource.getRepository(Order)
export const foodRepository = AppDataSource.getRepository(Food)
export const tableRepository = AppDataSource.getRepository(Table)