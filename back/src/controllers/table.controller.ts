import { Request, Response } from "express";
import tableService from "../services/table.service";

const create = async (req: Request, res: Response): Promise<Response> => {
    const food = await tableService.create(req.body)
    return res.status(201).json(food)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const foods = await tableService.read()
    return res.status(200).json(foods)
}

const update = async (req: Request, res: Response): Promise<Response> => {
    const food = await tableService.update(req.body, res.locals.payload)
    return res.status(200).json(food)
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await tableService.destroy(res.locals.payload)
    return res.status(204).json()
}

export default { create, read, update, destroy }