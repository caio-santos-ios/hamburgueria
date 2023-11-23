import { Navigate, Outlet } from "react-router-dom"

export const RouterAdmin = () => {  
    const initialAcess: string | null = localStorage.getItem("@token")
    const acess: string | any = initialAcess ? initialAcess : false
    const validated = JSON.parse(acess)
    return(
        <>
            {
                !validated ? 
                <Navigate to="/login" />
                :
                <Outlet />
            }
        </>
    )
}