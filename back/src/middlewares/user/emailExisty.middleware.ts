import { NextFunction, Request, Response } from "express";
import { userRepository } from "../../respository";
import { AppError } from "../../error/AppError";

export const emailExistyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const user = await userRepository.findOneBy({
        email: req.body.email
    })
    // console.log(user)
    if(user) throw new AppError("Email inválido", 401)

    return next()
}