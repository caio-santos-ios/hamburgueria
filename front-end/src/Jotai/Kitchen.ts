import { atom } from "jotai";

const isLoggedLocals: string | null = localStorage.getItem("@acess")
const isLoggedLocalsInitial: boolean | string = isLoggedLocals ? isLoggedLocals : false
export const isLogged = atom(Boolean(isLoggedLocalsInitial))