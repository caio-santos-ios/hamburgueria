import { Router } from "express";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { payloadExistyMiddleware } from "../middlewares/payloadExisty.middleware";
import { foodRepository } from "../respository";
import foodController from "../controllers/food.controller";

export const foodRouter: Router = Router()

foodRouter.post('', validatedTokenMiddleware, isAdminMiddleware, foodController.create)
foodRouter.get('', foodController.read)
foodRouter.patch('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(foodRepository, "Comida não existe"), foodController.update)
foodRouter.delete('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(foodRepository, "Comida não existe"), foodController.destroy)