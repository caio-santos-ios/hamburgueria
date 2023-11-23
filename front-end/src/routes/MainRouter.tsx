import { Route, Routes } from "react-router-dom";
import { RouterAdmin } from "./RouterAdmin";
import { RouterWaiter } from "./RouterWaiter";
import MenuPage from "../pages/MenuPage/MenuPage";
import WaiterInitialPage from "../pages/CollaboratorPage/CollaboratorPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import KitchenPage from "../pages/KitchenPage/KitchenPage";
import { RouterKitchen } from "./RouterKitchen";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddWaiterPage from "../pages/AddWaiterPage";
import AddFoodPage from "../pages/AddFoodPage";
import ListFoodPage from "../pages/ListFoodPage";

export const MainRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<WaiterInitialPage />} />
            <Route path="/menu" element={<RouterWaiter />}>
                <Route index element={<MenuPage />} />
            </Route>
            <Route path="/pedidos" element={<RouterKitchen />}>
                <Route index element={<KitchenPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<RouterAdmin />}>
                <Route index element={<AdminPage />} />
            </Route>
            <Route path="/admin/cadastrar_garcom" element={<RouterAdmin />}>
                <Route index element={<AddWaiterPage />} />
            </Route>
            <Route path="/admin/cadastrar_lanche" element={<RouterAdmin />}>
                <Route index element={<AddFoodPage />} />
            </Route>
            <Route path="/admin/lanches_cadastrados" element={<RouterAdmin />}>
                <Route index element={<ListFoodPage />} />
            </Route>
        </Routes>
    )
}