import { orderSchemaRequest, orderSchemaResponse, orderSchemaUpdate } from "../schemas/order.schema";
import { z } from "zod";

type TOrderRequest = z.infer<typeof orderSchemaRequest>
type TOrderResponse = z.infer<typeof orderSchemaResponse>
type TOrderUpdate = z.infer<typeof orderSchemaUpdate>

export { TOrderRequest, TOrderResponse, TOrderUpdate }