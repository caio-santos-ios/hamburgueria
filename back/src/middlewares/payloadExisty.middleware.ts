import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";

export const payloadExistyMiddleware = (repository: any, message: string) => async (req: Request, res: Response, next: NextFunction) => {
    const payload = await repository.findOneBy({
        id: Number(req.params.id)
    })
    
    if(!payload) throw new AppError(message, 404)

    res.locals.payload = payload

    return next()
}