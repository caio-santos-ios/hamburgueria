import { Order } from "../entities/order.entity"
import { TOrderRequest, TOrderResponse, TOrderUpdate } from "../interfaces/order.interface"
import { orderRepository, userRepository } from "../respository"
import { orderSchemaResponse, orderSchemaUpdate } from "../schemas/order.schema"

const create = async (myOrders: TOrderRequest[]): Promise<any> => {
    const listOrder: Order[] = []
    await Promise.all(myOrders.map(async (order: TOrderRequest) => {
        const orderCreate = orderRepository.create(order)
        await orderRepository.save(orderCreate)
        listOrder.push(orderCreate)
    }))
    return listOrder;
}

const read = async (): Promise<any[]> => {
    const orders: Order[] = await orderRepository.find({
        relations: {
            table: true,
            food: true,
            user: true
        }
    })
    return orders
}

const update = async (order: TOrderRequest, orderUpdate: TOrderUpdate): Promise<any> => {
    const orderData: Order = await orderRepository.save({...orderUpdate, ...order})
    return orderData
}

const destroy = async (order: any): Promise<void> => {
    await orderRepository.delete(order)
    return
}

export default { create, read, update, destroy }
