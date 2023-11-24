import axios from "axios";

export const api = axios.create({
    baseURL: "https://hamburgueria-oc3h.onrender.com"
})