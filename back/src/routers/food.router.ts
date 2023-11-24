import { Router } from "express";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { payloadExistyMiddleware } from "../middlewares/payloadExisty.middleware";
import { foodRepository } from "../respository";
import foodController from "../controllers/food.controller";

export const foodRouter: Router = Router()

/**
 * @swagger
 * /foods:
 *   post:
 *     summary: Cria um novo alimento
 *     description: Cria um novo alimento no sistema (requer token validado e permissões de administrador)
 *     responses:
 *       201:
 *         description: Alimento criado com sucesso
 *         content:
 *           application/json:
 *             example: { "foods": [{ "name": "X-burguer", "price": 15 }] }
 */
foodRouter.post('', validatedTokenMiddleware, isAdminMiddleware, foodController.create)
/**
 * @swagger
 * /foods:
 *   get:
 *     summary: Retorna a lista de alimentos
 *     description: Obtém a lista dos alimentos cadastrados no sistema
 *     responses:
 *       200:
 *         description: Lista de usuários recuperada com sucesso
 */
foodRouter.get('', foodController.read)
/**
 * @swagger
 * /foods/{id}:
 *   patch:
 *     summary: Atualiza um alimento existente
 *     description: Atualiza as informações de um alimento existente (requer token validado, permissões de administrador e payload existente)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do alimento a ser atualizado
 *     responses:
 *       200:
 *         description: Alimento atualizado com sucesso
 */
foodRouter.patch('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(foodRepository, "Comida não existe"), foodController.update)
/**
 * @swagger
 * /foods/{id}:
 *   delete:
 *     summary: Exclui um alimento existente
 *     description: Exclui um alimento existente do sistema (requer token validado, permissões de administrador e payload existente)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do alimento a ser excluído
 *     responses:
 *       204:
 *         description: Alimento excluído com sucesso
 */
foodRouter.delete('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(foodRepository, "Comida não existe"), foodController.destroy)