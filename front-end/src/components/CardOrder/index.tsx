import { useAtom } from "jotai";
import { StyleButton } from "../../style/Button";
import { StyleCardOrder, NameFood, QtdFood, ContainerQtd } from "./style";
import { listOrders } from "../../Jotai/Order";
import { TOrder } from "../../@types/Order";

type TProps = {
    id: number;
    name: string;
    price: number;
    quanty: number;
}

export const CardOrder: React.FC<TProps> = ({id, name, quanty}) => {
    const [orders, setOrders] = useAtom(listOrders)

    const addOrder = (id: string) => {
        const indexOrder = orders.findIndex((order: TOrder) => order.id === Number(id))
        orders[indexOrder].quanty += 1
        orders[indexOrder].valueTotal = orders[indexOrder].quanty * orders[indexOrder].price 
        const newOrders = [...orders]
        localStorage.setItem("@orders", JSON.stringify(newOrders))
        setOrders(newOrders)
    }

    const removeOrder = (id: string) => {
        const indexOrder = orders.findIndex((order: TOrder) => order.id === Number(id))
        if(orders[indexOrder].quanty > 1){
            orders[indexOrder].quanty -= 1
            orders[indexOrder].valueTotal = orders[indexOrder].quanty * orders[indexOrder].price 
            const newOrders = [...orders]
            localStorage.setItem("@orders", JSON.stringify(newOrders))
            return setOrders(newOrders)
        }
        const removed = orders.filter((order: TOrder) => order.id !== Number(id))
        localStorage.setItem("@orders", JSON.stringify(removed))
        return setOrders(removed)
    }


    return(
        <StyleCardOrder>
            <NameFood>{name}</NameFood>
            <ContainerQtd>
                <StyleButton onClick={(e) => addOrder(e.currentTarget.id)} id={String(id)} styleButton="">+</StyleButton>
                <QtdFood>{quanty}</QtdFood>
                <StyleButton onClick={(e) => removeOrder(e.currentTarget.id)} id={String(id)} styleButton="">-</StyleButton>
            </ContainerQtd>
        </StyleCardOrder>
    )
}