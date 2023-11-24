import { z } from "zod";
import { tableSchema } from "./table.schema";
import { userSchema } from "./user.schema";

const orderSchema = z.object({
    id: z.number(),  
    isOpen: z.boolean().default(true),
    isDone: z.boolean().default(false),
    valueTotal: z.number(),
    quanty: z.number(),
    user: userSchema,
    table: tableSchema
})

const orderSchemaRequest = orderSchema.omit({id: true})
const orderSchemaResponse = orderSchema
const orderSchemaUpdate = orderSchemaRequest.partial()

export { orderSchema, orderSchemaRequest, orderSchemaResponse, orderSchemaUpdate }