import { Router } from "express";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";
import { payloadExistyMiddleware } from "../middlewares/payloadExisty.middleware";
import { tableRepository } from "../respository";
import tableController from "../controllers/table.controller";

export const tableRouter: Router = Router()

tableRouter.post('', validatedTokenMiddleware, isAdminMiddleware, tableController.create)
tableRouter.get('', tableController.read)
tableRouter.patch('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(tableRepository, "Mesa não existe"), tableController.update)
tableRouter.delete('/:id', validatedTokenMiddleware, isAdminMiddleware, payloadExistyMiddleware(tableRepository, "Mesa não existe"), tableController.destroy)