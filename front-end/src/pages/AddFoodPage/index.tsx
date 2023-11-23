import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import { Section } from "../../components/Section";
import { StyleButton } from "../../style/Button";
import { StyleInput } from "../../style/Input";
import { api } from "../../service/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyleLabel } from "../../style/Label";
import { CartegoryFood, CartegoryFoodItem } from "./style";

type TInputs = {
    name: string;
    price: number;
    category: string;
}

const AddFoodPage = () => {
    const { register, handleSubmit, reset } = useForm<TInputs>()
    const navegation = useNavigate()

    const [emailDefault, setEmailDefault] = useState("")
    const token = localStorage.getItem("@token")
    const myToken = JSON.parse(token!)

    useEffect(() => {
        const req = async () => {
            try {
                const res = await api.get("/users", {headers: {Authorization: myToken.token}})
                setEmailDefault(`garcom${res.data.length + 1}@email.com`)
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [emailDefault])

    const onSubmit: SubmitHandler<TInputs> = async (data: any) => {
        if(!data.name || !data.price) return toast.error('Preencha todos os campos', {})
        
        try {
            await api.post("/foods", data, {headers: {Authorization: myToken.token}})
            reset()
            toast.success('Lanche cadastrado(a)', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        } catch (error: any) {
           
        }
    }

    return(
        <>
           <main>
                <main>
                    <Section typeSection="display_admin_add">
                        <StyleButton onClick={() => navegation("/admin")} styleButton="back">Voltar</StyleButton>
                        <Form onSubmit={handleSubmit(onSubmit)} typeForm="display_admin_add">
                            <StyleLabel styleLabel="" htmlFor="name_food">Nome Do Lanche</StyleLabel>
                            <StyleInput id="name_food" {...register("name")} type="text" placeholder="Nome do lanche" styleInput="display_admin_add" />
                            <StyleLabel styleLabel="" htmlFor="price_food">Valor</StyleLabel>
                            <StyleInput id="price_food" {...register("price")} type="number" placeholder="Valor do lanche" styleInput="display_admin_add" />
                            
                            <StyleLabel styleLabel=""  htmlFor="category_food">Categorias</StyleLabel>
                            <CartegoryFood id="category_food">
                                <CartegoryFoodItem>
                                    <span>Outros</span>
                                    <StyleInput styleInput="" defaultChecked value="others" {...register("category")} type="radio" />
                                </CartegoryFoodItem>
                                <CartegoryFoodItem>
                                    <span>Lanche</span>
                                    <StyleInput styleInput="" value="snack" {...register("category")} type="radio" />
                                </CartegoryFoodItem>
                                <CartegoryFoodItem>
                                    <span>Bebida</span>
                                    <StyleInput styleInput="" value="drink" {...register("category")} type="radio" />
                                </CartegoryFoodItem>
                                <CartegoryFoodItem>
                                    <span>Sobremesa</span>
                                    <StyleInput styleInput="" value="dessert" {...register("category")} type="radio" />
                                </CartegoryFoodItem>
                            </CartegoryFood>
                            <StyleButton styleButton="">Cadastrar</StyleButton>
                        </Form>
                    </Section>
           </main>
           </main>
        </>
    )
}

export default AddFoodPage;