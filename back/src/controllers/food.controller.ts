import { Request, Response } from "express";
import foodService from "../services/food.service";

const create = async (req: Request, res: Response): Promise<Response> => {
    const food = await foodService.create(req.body)
    return res.status(201).json(food)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const foods = await foodService.read()
    return res.status(200).json(foods)
}

const update = async (req: Request, res: Response): Promise<Response> => {
    const food = await foodService.update(req.body, res.locals.payload)
    return res.status(200).json(food)
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await foodService.destroy(res.locals.payload)
    return res.status(204).json()
}

export default { create, read, update, destroy }