import { Router } from "express";
import sessionController from "../controllers/session.controller";
import { validatedAcessMiddleware } from "../middlewares/validatedAcess.middleware";

export const sessionRouter: Router = Router()

sessionRouter.post('/login', sessionController.login)
sessionRouter.post('/validated', validatedAcessMiddleware, sessionController.validatedAcess)
