import { Request, Response } from "express";
import sessionService from "../services/session.service";

const login = async (req: Request, res: Response): Promise<Response> => {
    const tokenUser = await sessionService.login(req.body)
    return res.status(200).json(tokenUser)
}


const validatedAcess = async (req: Request, res: Response): Promise<Response> => {
    const acessUser = await sessionService.validatedAcess(res.locals.payload)
    return res.status(200).json(acessUser)
}

export default { login, validatedAcess }