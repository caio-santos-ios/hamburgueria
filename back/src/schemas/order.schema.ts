import { z } from "zod";
import { waiterSchema } from "./waiter.schema";
import { tableSchema } from "./table.schema";

const orderSchema = z.object({
    id: z.number(),  
    isOpen: z.boolean().default(true),
    isDone: z.boolean().default(false),
    valueTotal: z.number(),
    quanty: z.number(),
    waiter: waiterSchema,
    table: tableSchema
})

const orderSchemaRequest = orderSchema.omit({id: true})
const orderSchemaResponse = orderSchema
const orderSchemaUpdate = orderSchemaRequest.partial()

export { orderSchema, orderSchemaRequest, orderSchemaResponse, orderSchemaUpdate }