import { userSchemaRequest, userSchemaResponse, usersSchemaResponse, userSchemaUpdate } from "../schemas/user.schema";
import { z } from "zod";

type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>
type TUsersResponse = z.infer<typeof usersSchemaResponse>
type TUserUpdate = z.infer<typeof userSchemaUpdate>

export { TUserRequest, TUserResponse, TUsersResponse, TUserUpdate }