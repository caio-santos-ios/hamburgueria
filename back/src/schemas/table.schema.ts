import { z } from "zod";

const tableSchema = z.object({
    id: z.number(),  
    tableNumber: z.number()
})

const tableSchemaRequest = tableSchema.omit({id: true})
const tableSchemaResponse = tableSchema
const tableSchemaUpdate = tableSchemaRequest.partial()

export { tableSchema, tableSchemaResponse, tableSchemaUpdate, tableSchemaRequest }