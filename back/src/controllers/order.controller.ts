import { Request, Response } from "express";
import orderService from "../services/order.service";

const create = async (req: Request, res: Response): Promise<Response> => {
    const order = await orderService.create(req.body)
    return res.status(201).json(order)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const orders = await orderService.read()
    return res.status(200).json(orders)
}

const update = async (req: Request, res: Response): Promise<Response> => {
    const order = await orderService.update(req.body, res.locals.payload)
    return res.status(200).json(order)
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await orderService.destroy(res.locals.payload)
    return res.status(204).json()
}

export default { create, read, update, destroy }