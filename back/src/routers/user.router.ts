import { Router } from "express";
import userController from "../controllers/user.controller";
import { payloadExistyMiddleware } from "../middlewares/payloadExisty.middleware";
import { userRepository } from "../respository";
import user from "../middlewares/user";

export const userRouter: Router = Router()

userRouter.post('', user.emailExistyMiddleware, userController.create)
userRouter.get('', userController.read)
userRouter.patch('/:id', payloadExistyMiddleware(userRepository, "Usuário não encontrado"), userController.update)
userRouter.delete('/:id', payloadExistyMiddleware(userRepository, "Usuário não encontrado"), userController.destroy)