import { atom } from "jotai";

const listOrderLocals: string | null = localStorage.getItem("@orders")
const listOrderLocalsInitial: [] | any = listOrderLocals ? JSON.parse(listOrderLocals) : []
export const listOrders = atom(listOrderLocalsInitial)
export const listOrdersOpen = atom([])