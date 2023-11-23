import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { StyleButton } from "../../style/Button";
import { CardInsights, ContainerHeaderInsights, ContainerInsights, CountInsigths } from "./style";
import { MdOutlineBorderColor } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [countOrder, setCountOrder] = useState<number>(0)    
    const [valueTotalOrder, setValueTotalOrder] = useState<number>(0)
    const navegation = useNavigate()

    useEffect(() => {
        const req = async () => {
            try {
                const res = await api.get("/orders")
                const valueTotal = res.data.reduce((value: number, order: any) => Number(value) + Number(order.valueTotal), 0)
                setValueTotalOrder(valueTotal)
                setCountOrder(res.data.length)
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [])

    return(
        <>
            <Header waiter={false} />
            <main>
                <Section typeSection="display_admin">
                     <ContainerHeaderInsights>
                        <StyleButton onClick={() => navegation("/admin/cadastrar_garcom")} styleButton="display_insigths_add">
                            Cadastrar Garçom
                        </StyleButton>
                        <StyleButton onClick={() => navegation("/admin/cadastrar_lanche")} styleButton="display_insigths_add">
                            Cadastrar Lanche
                        </StyleButton>
                        <StyleButton onClick={() => navegation("/admin/lanches_cadastrados")} styleButton="display_insigths_add">
                            Lanches Cadastrados
                        </StyleButton>
                    </ContainerHeaderInsights>
                    <ContainerInsights>
                        <CardInsights>
                            <StyleButton disabled styleButton="display_insigths_icon">
                                <MdOutlineBorderColor />
                            </StyleButton>
                            <CountInsigths>{countOrder}</CountInsigths>
                        </CardInsights>
                        <CardInsights>
                            <StyleButton disabled styleButton="display_insigths_icon">
                                <FaMoneyBillTrendUp />
                            </StyleButton>
                            <CountInsigths>{
                                valueTotalOrder.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })    
                            }</CountInsigths>
                        </CardInsights>
                    </ContainerInsights>
                </Section>
            </main>
        </>
    )
}

export default AdminPage;