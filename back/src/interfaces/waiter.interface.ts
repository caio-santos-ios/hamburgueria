import { waiterSchemaRequest, waiterSchemaResponse, waiterSchemaUpdate, waitersSchemaResponse } from "../schemas/waiter.schema";
import { z } from "zod";

type TWaiterRequest = z.infer<typeof waiterSchemaRequest>
type TWaiterResponse = z.infer<typeof waiterSchemaResponse>
type TWaitersResponse = z.infer<typeof waitersSchemaResponse>
type TWaiterUpdate = z.infer<typeof waiterSchemaUpdate>

export { TWaiterRequest, TWaiterResponse, TWaitersResponse, TWaiterUpdate }