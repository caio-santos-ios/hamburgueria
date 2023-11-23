import { TTable } from "./Table";
import { TWaiter } from "./Waiter";

export type TOrder = {
    id: number;
    name: string;
    price: number;
    quanty: number;
    valueTotal: number;
    waiter?: TWaiter;
    table?: TTable;
}