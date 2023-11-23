import { Navigate, Outlet } from "react-router-dom";

export const RouterWaiter = () => {  
    const initialAcessWaiter: string | null = localStorage.getItem("@acess")
    const acessWaiter: string | any = initialAcessWaiter ? initialAcessWaiter : false
    const validatedWaiter = JSON.parse(acessWaiter)

    const initialAcess: string | null = localStorage.getItem("@token")
    const acess: string | any = initialAcess ? initialAcess : false
    const validated = JSON.parse(acess)

    const isWaiterOrAdmin = validatedWaiter.acess === "waiter" || validated

    return(
        <>
            {
                isWaiterOrAdmin ? 
                <Outlet />
                :
                <Navigate to="/"/>
            }
        </>
    )
}