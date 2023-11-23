import { Router } from "express";
import orderController from "../controllers/order.controller";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { payloadExistyMiddleware } from "../middlewares/payloadExisty.middleware";
import { orderRepository } from "../respository";

export const orderRouter: Router = Router()

orderRouter.post('', orderController.create)
orderRouter.get('', /*validatedTokenMiddleware, isAdminMiddleware,*/ orderController.read)
orderRouter.patch('/:id', payloadExistyMiddleware(orderRepository, "Ordem não encontrada"), orderController.update)
orderRouter.delete('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(orderRepository, "Ordem não encontrada"), orderController.destroy)