import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import { Section } from "../../components/Section";
import { StyleButton } from "../../style/Button";
import { StyleInput } from "../../style/Input";
import { api } from "../../service/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type TInputs = {
    name: string;
    email: string;
    password: string;
}

const AddWaiterPage = () => {
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
        data.waiter = true
        data.email = emailDefault
        try {
            api.post("/users", data, {headers: {Authorization: myToken.token}})
            setEmailDefault(`garcom${emailDefault + 1}@email.com`)
            reset()
            toast.success('Garçom cadastrado(a)', {
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
                            <label htmlFor="">Nome</label>
                            <StyleInput {...register("name")} type="text" placeholder="Nome do Garçom" styleInput="display_admin_add" />
                            <label htmlFor="">Email</label>
                            <StyleInput {...register("email")} disabled defaultValue={emailDefault} type="email" placeholder="Email do Garçom" styleInput="display_admin_add" />
                            <label htmlFor="">Senha</label>
                            <StyleInput {...register("password")} type="password" placeholder="Senha do Garçom" styleInput="display_admin_add" />
                            <StyleButton styleButton="">Cadastrar</StyleButton>
                        </Form>
                    </Section>
           </main>
           </main>
        </>
    )
}

export default AddWaiterPage;