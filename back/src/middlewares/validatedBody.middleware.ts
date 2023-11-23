import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validatedBodyMiddleware = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {
    const validated = schema.parse(req.body)

    req.body = validated

    return next()
}