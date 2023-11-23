import { Navigate, Outlet } from "react-router-dom";

export const RouterKitchen = () => {
    const initialAcessKitchen: string | null = localStorage.getItem("@acess")
    const acessKitchen: string | any = initialAcessKitchen ? initialAcessKitchen : false
    const validatedKitchen = JSON.parse(acessKitchen)

    const initialAcess: string | null = localStorage.getItem("@token")
    const acess: string | any = initialAcess ? initialAcess : false
    const validated = JSON.parse(acess)
    
    const isKitchenOrAdmin = validatedKitchen.acess === "waiter" || validated

    return(
        <>
            {
                isKitchenOrAdmin ? 
                <Outlet />
                :
                <Navigate to="/"/>
            }
        </>
    )
}