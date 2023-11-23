import { useAtom } from "jotai";
import { StyleButton } from "../../style/Button";
import { StyleCardMenu, NameFood, PriceFood } from "./style";
import { listFood } from "../../Jotai/Food";
import { TFood } from "../../@types/Food";
import { listOrders } from "../../Jotai/Order";
import { TOrder } from "../../@types/Order";
import { toast } from "react-toastify";

type TProps = {
    id: number;
    name: string;
    price: number;
}

export const CardMenu: React.FC<TProps> = ({id, name, price}) => {
    const [foods] = useAtom(listFood)
    const [orders, setOrders] = useAtom(listOrders)
    const waiterSelected: string | null = localStorage.getItem("@acess")
    const initialWaiter: any = waiterSelected ? JSON.parse(waiterSelected) : null
    const tableSelected: string | null = localStorage.getItem("@table")
    const initialTable: any = tableSelected ? JSON.parse(tableSelected) : null
    
    const addOrder = (id: string) => {
        if(Number(initialTable) === 0) {
            toast('Selecione uma mesa', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return
        }
        const indexOrder = orders.findIndex((order: TOrder) => order.id === Number(id))
        const myFood: TFood | undefined = foods.find((food: any) => food.id === Number(id))
        
        if(indexOrder === -1){
            const newOrder: any = myFood
            newOrder.quanty = 1
            newOrder.valueTotal = myFood!.price
            newOrder.waiter = initialWaiter.id
            newOrder.table = Number(initialTable)
            newOrder.food = myFood!.id
            if(orders.length === 0){
                localStorage.setItem("@orders", JSON.stringify([newOrder]))
                return setOrders([newOrder])
            }
            localStorage.setItem("@orders", JSON.stringify([...orders, newOrder]))
            return setOrders([...orders, newOrder])
        }else {
            orders[indexOrder].quanty += 1
            orders[indexOrder].valueTotal = orders[indexOrder].quanty * orders[indexOrder].price 
            const newOrders = [...orders]
            localStorage.setItem("@orders", JSON.stringify(newOrders))
            return setOrders(newOrders)
        }
    }
    return(
        <StyleCardMenu>
            <NameFood>{name}</NameFood>
            <PriceFood>R$ {price}</PriceFood>
            <StyleButton onClick={(e) => addOrder(e.currentTarget.id)} id={String(id)} styleButton="" >Adicionar</StyleButton>
        </StyleCardMenu>
    )
}