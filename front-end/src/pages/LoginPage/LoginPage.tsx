import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../../components/Form";
import { Section } from "../../components/Section";
import { StyleButton } from "../../style/Button";
import { StyleInput } from "../../style/Input";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type TInputs = {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register, handleSubmit } = useForm<TInputs>()

    const navegation = useNavigate()

    const onSubmit: SubmitHandler<TInputs> = async (data: any) => {
        try {
            const res = await api.post("/session/login", data)
            localStorage.setItem("@token", JSON.stringify(res.data))
            navegation("/admin")
        } catch (error: any) {
            if(error.response.status === 401){
                toast.error('Credenciais incorretas', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        }
    }

    return(
        <main>
            <Section typeSection="display_login">
                <Form onSubmit={handleSubmit(onSubmit)} typeForm="display_login">
                    <label htmlFor="">Email</label>
                    <StyleInput placeholder="Email do admin" styleInput="login" {...register("email")} type="email" />
                    <label htmlFor="">Senha</label>
                    <StyleInput placeholder="Senha do admin" styleInput="login" {...register("password")} type="password" />
                    <StyleButton styleButton="login" type="submit">Entrar</StyleButton>
                </Form>
            </Section>
        </main>
    )
}

export default LoginPage;