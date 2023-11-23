import { NextFunction, Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { ZodError } from "zod";
import { AppError } from "../error/AppError";

export const handlerErrorMiddleware = (err: Error) => (req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message })
    }

    if(err instanceof ZodError){
        return res.status(400).json({message: err.flatten().fieldErrors})
    }

    if(err instanceof QueryFailedError){
        const message: string = err.driverError.detail
        return res.status(409).json({ message })
    }
    
    return res.status(500).json({ message: 'Internal Server Error!' })
}