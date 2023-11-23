import { useAtom } from "jotai"
import { HeaderOrderModal, OrderModal, StyleModalOrders } from "./style"
import { listOrdersOpen } from "../../Jotai/Order"
import { useEffect } from "react"
import { api } from "../../service/api"
import { StyleListMenu } from "../ListMenu/style"
import { StyleButton } from "../../style/Button"

export const ModalOrders = ({setModalIsOpen}: any) => {
    const [ordersOpen, setOrdersOpen] = useAtom(listOrdersOpen)
    const waiterSelected: string | null = localStorage.getItem("@acess")
    const initialWaiter: any = waiterSelected ? JSON.parse(waiterSelected) : null

    useEffect(() => {
        const myOrdersOpen = async () => {
            try {
                const res = await api.get(`/waiters/${initialWaiter.id}`)
                setOrdersOpen(res.data.orders)
            } catch (error) {
                console.log(error)
            }
        }
        myOrdersOpen()
    }, [])

    const toCloseOrder = async (id: string) => {
        try {
            await api.patch(`/orders/${id}`, { isDone: false })
            setOrdersOpen(ordersOpen)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <StyleModalOrders>
            <HeaderOrderModal>
                <h1>Pedidos Prontos</h1>
                <StyleButton onClick={() => setModalIsOpen(false)} styleButton="display_modal_order">x</StyleButton>
            </HeaderOrderModal>
            <StyleListMenu>
                <OrderModal key="0">
                    <span>Mesa</span> 
                    <span>Quantidade</span> 
                    <span>Valor Total</span> 
                </OrderModal>
                {
                    ordersOpen.length > 0 ?
                    ordersOpen.map((order: any) => {
                        return (
                            order.isDone ?
                            <OrderModal key={order.id}>
                                <span>#</span> 
                                <span>{order.quanty}</span> 
                                <span>R$ {order.valueTotal}</span> 
                                <StyleButton onClick={(e) => toCloseOrder(e.currentTarget.id)} id={order.id} styleButton="">Entregue</StyleButton>
                            </OrderModal>
                            : null
                        )
                    }) 
                    :
                    null
                }
            </StyleListMenu>
        </StyleModalOrders>
    )
}
/*
 return(
*/