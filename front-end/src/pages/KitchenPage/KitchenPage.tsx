import { useAtom } from "jotai";
import { Header } from "../../components/Header";
import { BodyTable, HeaderTable, ItenBody, ItenHeader, Table, TitleSection, TitleTable } from "./style";
import { listOrders } from "../../Jotai/Order";
import { useEffect } from "react";
import { api } from "../../service/api";
import { StyleButton } from "../../style/Button";

const KitchenPage = () => {
    const [orders, setOrders] = useAtom(listOrders)

    useEffect(() => {
        const listFood = async () => {
            try {
                const res = await api.get("/orders")
                setOrders(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        listFood()
    }, [])

    const foodDone = async (id: string) => {
        const newOrders = orders.filter((order: any) => order.id !== Number(id))
        try {
            await api.patch(`/orders/${id}`, { isDone: true })
            setOrders(newOrders)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
            <Header waiter={false} />
            <main>
                <TitleSection>Pedidos em Aberto</TitleSection>
                <Table>
                    <HeaderTable>
                        <ItenHeader>
                            <TitleTable>#</TitleTable>
                            <TitleTable>Lanche</TitleTable>
                            <TitleTable>Quantidade</TitleTable>
                            <TitleTable>Valor total</TitleTable>
                            <TitleTable></TitleTable>
                        </ItenHeader>
                    </HeaderTable>
                    <BodyTable>
                        {
                            orders.length > 0 && 
                            orders.filter((order: any) => !order.isDone)
                            .map((order: any) => {
                                return(
                                    <ItenBody>
                                        <TitleTable>{order.id}</TitleTable>
                                        <TitleTable>{order.food.name}</TitleTable>
                                        <TitleTable>{order.quanty}</TitleTable>
                                        <TitleTable>R$ {order.valueTotal}</TitleTable>
                                        <StyleButton onClick={(e) => foodDone(e.currentTarget.id)} id={order.id} styleButton="">Feito</StyleButton>
                                    </ItenBody>
                                )
                            })   
                        }
                </BodyTable>
                </Table>
            </main>
        </>
    )
}

export default KitchenPage;