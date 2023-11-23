import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/AppError";
import { userRepository } from "../respository";
import { userSchemaResponse } from "../schemas/user.schema";

export const validatedAcessMiddleware = async (req: Request, res: Response, next: NextFunction) => {    
    if (!req.body) {
        throw new AppError('Credenciais inválidas', 401)
    }

    const payload = await userRepository.findOneBy({
        email: req.body.email
    })

    if (!payload) {
        throw new AppError('Credenciais inválidas', 401)
    }

    if (payload.email !== req.body.email) {
        throw new AppError('Credenciais inválidas', 401)
    }

    res.locals.payload = userSchemaResponse.parse(payload)

    return next()
}