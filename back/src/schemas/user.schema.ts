import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    waiter: z.boolean().default(false),
    kitchen: z.boolean().default(false),
    isAdmin: z.boolean().default(false)
})

const userSchemaRequest = userSchema.omit({id: true})
const userSchemaResponse = userSchema.omit({password: true})
const usersSchemaResponse = userSchemaResponse.array()
const userSchemaUpdate = userSchemaRequest.partial()

export { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse, userSchemaUpdate }