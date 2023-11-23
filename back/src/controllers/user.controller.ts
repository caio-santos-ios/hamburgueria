import { Request, Response } from "express";
import userService from "../services/user.service";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user = await userService.create(req.body)
    return res.status(201).json(user)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const users = await userService.read()
    return res.status(200).json(users)
}

const update = async (req: Request, res: Response): Promise<Response> => {
    const user = await userService.update(req.body, res.locals.payload)
    return res.status(200).json(user)
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userService.destroy(res.locals.payload)
    return res.status(204).json()
}

export default { create, read, update, destroy }