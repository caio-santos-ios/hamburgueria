import { loginSchemaRequest, loginSchemaResponse } from "../schemas/session.schema";
import { z } from "zod";

type TSessionRequest = z.infer<typeof loginSchemaRequest>
type TSessionResponse = z.infer<typeof loginSchemaResponse>

export { TSessionRequest, TSessionResponse }