import React, { useState } from "react";
import { StyleButton } from "../../style/Button"
import { Logo, StyleHeader } from "./style"
import { MdOutlineMenuBook } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { ModalOrders } from "../ModalOrders";
import { useNavigate } from "react-router-dom";

type IProps = {
    waiter: boolean;
}

export const Header: React.FC<IProps> = ({waiter}) => {
    const navegation = useNavigate()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const initialAcess: string | null = localStorage.getItem("@token")
    const acess: string | any = initialAcess ? initialAcess : false
    const validated = JSON.parse(acess)

    const logout = () => {
        if(validated){
            localStorage.removeItem("@token")
            return navegation("/login")
        }
        localStorage.removeItem("@acess")
        localStorage.removeItem("@table")
        navegation("/")
    }
    
    return(
        <StyleHeader>
            <Logo>Hamburgueria</Logo>
            {
                validated ? 
                <>
                    <StyleButton styleButton="" onClick={() => navegation("/pedidos")}>Cozinha</StyleButton>
                    <StyleButton styleButton="" onClick={() => navegation("/menu")}>Cardapio</StyleButton>
                </>
                : 
                null
            }
            {
                waiter ? 
                <StyleButton styleButton="" onClick={() => setModalIsOpen(!modalIsOpen)}>
                    <MdOutlineMenuBook />
                </StyleButton>
                :
                null
            }
            <StyleButton styleButton="" onClick={() => logout()}>
                <CiLogout />
            </StyleButton>
            {
                modalIsOpen ? 
                <ModalOrders setModalIsOpen={setModalIsOpen} />
                :
                null
            }
        </StyleHeader>
    )
}