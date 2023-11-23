import { atom } from "jotai";

const isLoggedLocals: string | null = localStorage.getItem("@token")
const isLoggedLocalsInitial: boolean | string = isLoggedLocals ? JSON.parse(isLoggedLocals) : false
export const isLoggedAdmin = atom(isLoggedLocalsInitial)