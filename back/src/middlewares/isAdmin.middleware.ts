import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/AppError";

export const isAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const admin = res.locals.acess.admin
    
    if(!admin) throw new AppError("Sem permissão", 401) 

    return next()
}