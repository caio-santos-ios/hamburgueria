import { CardMenu } from "../../components/CardMenu";
import { Header } from "../../components/Header";
import { Menu } from "../../components/ListMenu";
import { TFood } from "../../@types/Food";
import { Section } from "../../components/Section";
import { CardOrder } from "../../components/CardOrder";
import { listOrders } from "../../Jotai/Order";
import { useAtom } from "jotai";
import { listFood } from "../../Jotai/Food";
import { TOrder } from "../../@types/Order";
import { ContainerHeader, ContainerValue, Select, Option } from "./style";
import { StyleButton } from "../../style/Button";
import { api } from "../../service/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { listTables } from "../../Jotai/Table";
import { TTable } from "../../@types/Table";

const MenuPage = () => {
    const [orders, setOrders] = useAtom(listOrders)
    const [foods, setFood] = useAtom(listFood)
    const [tables, setTables] = useAtom(listTables)
    const valueTotal = orders.reduce((sum: number, order: TOrder) => Number(sum) + Number(order.valueTotal), 0)
    const tableSelected: string | null = localStorage.getItem("@table")
    const initialTable: any = tableSelected ? JSON.parse(tableSelected) : null
    
    const finishOrder = async () => {
        try {
            await api.post("/orders", orders)
            localStorage.removeItem("@orders")
            localStorage.removeItem("@table")
            setOrders([])
            toast.success('Pedido criado!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const listFood = async () => {
            try {
                const res = await api.get("/foods")
                setFood(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        listFood()
    }, [])

    useEffect(() => {
        const listTables = async () => {
            try {
                const res = await api.get("/tables")
                setTables(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        listTables()
    }, [])
    
    const selectedTable = (numberTable: string) => {
        setOrders([])
        localStorage.removeItem("@orders")
        localStorage.setItem("@table", JSON.stringify(numberTable))
    }

    return(
        <>
            <Header waiter={true} />
            <main>
                <Section typeSection="display_waiter_menu">
                    <Menu>
                        <ContainerHeader>
                            <ContainerValue>
                                {valueTotal.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </ContainerValue>
                            <Select onClick={(e) => selectedTable(e.currentTarget.value)}>
                                <Option value="">Mesas disponiveis</Option>
                                {
                                    tables.length > 0 ?
                                    tables.map((table: TTable) => {
                                        return Number(initialTable) === table.tableNumber ? <Option selected key={table.id} value={table.tableNumber}>{table.tableNumber}</Option> : <Option key={table.id} value={table.tableNumber}>{table.tableNumber}</Option>
                                    }) 
                                    :
                                    null
                                }
                            </Select>
                        </ContainerHeader>
                        {
                            orders.length > 0 ? 
                            <StyleButton onClick={() => finishOrder()} styleButton="display_finish_order">Concluir Pedido</StyleButton>
                            :
                            <StyleButton disabled onClick={() => finishOrder()} styleButton="display_finish_order">Concluir Pedido</StyleButton>
                        }
                        {   orders.length > 0 ?
                            orders.map((order: TOrder) => <CardOrder key={order.id} id={order.id} name={order.name} price={order.price} quanty={order.quanty} />)
                            :
                            null
                        }
                    </Menu>
                    <Menu>
                        {
                            foods.map((food: TFood) => <CardMenu key={food.id} id={food.id} name={food.name} price={food.price} />)
                        }
                    </Menu>
                </Section>
            </main>
        </>
    )
}

export default MenuPage;