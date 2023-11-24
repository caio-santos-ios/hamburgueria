import { Router } from "express";
import orderController from "../controllers/order.controller";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { payloadExistyMiddleware } from "../middlewares/payloadExisty.middleware";
import { orderRepository } from "../respository";

export const orderRouter: Router = Router()

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Cria um novo pedido
 *     description: Cria um novo pedido no sistema (requer token validado e permissões de administrador)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             example: { "orderId": "123", "status": "Criado" }
 */

orderRouter.post('', orderController.create)
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retorna os detalhes de um pedido
 *     description: Obtém os detalhes de um pedido específico no sistema
 *     responses:
 *       200:
 *         description: Detalhes do pedido recuperados com sucesso
 *         content:
 *           application/json:
 *             example: { "orderId": "123", "status": "Em andamento", "items": [...] }
 */
orderRouter.get('', orderController.read)
/**
 * @swagger
 * /orders/{id}:
 *   patch:
 *     summary: Atualiza os pedidos
 *     description: Faz a atualização dos pedidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido a ser recuperado
 *     responses:
 *       200:
 *         description: Detalhes do pedido recuperados com sucesso
 *         content:
 *           application/json:
 *             example: { "orderId": "123", "status": "Em andamento", "items": [...] }
 */
orderRouter.patch('/:id', payloadExistyMiddleware(orderRepository, "Ordem não encontrada"), orderController.update)
/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Exclui os pedidos
 *     description: Faz exclusão do pedido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido a ser recuperado
 *     responses:
 *       204:
 */
orderRouter.delete('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(orderRepository, "Ordem não encontrada"), orderController.destroy)