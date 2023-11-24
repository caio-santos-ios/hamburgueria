import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { handlerErrorMiddleware } from "./middlewares/handlerError.middleware";
import { userRouter } from "./routers/user.router";
import { orderRouter } from "./routers/order.router";
import { foodRouter } from "./routers/food.router";
import { tableRouter } from "./routers/table.router";
import { sessionRouter } from "./routers/session.router";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger';

export const app = express()

app.use(json())
app.use(cors())

app.use("/users", userRouter)
app.use("/orders", orderRouter)
app.use("/foods", foodRouter)
app.use("/tables", tableRouter)
app.use("/session", sessionRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(handlerErrorMiddleware)