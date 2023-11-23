import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../error/AppError";

export const validatedTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) {
        throw new AppError('Missing Authorization Token', 401)
    }
    const decoded = verify(token!, process.env.SECRET_KEY!)

    res.locals.acess = decoded
    
    return next()
}