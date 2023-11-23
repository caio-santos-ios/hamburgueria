import { Form } from "../../components/Form";
import { Section } from "../../components/Section";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyleButton } from "../../style/Button";
import { StyleInput } from "../../style/Input";
import { api } from "../../service/api";
import { useAtom } from "jotai";
import { isLogged } from "../../Jotai/Waiter";
import { useNavigate } from "react-router-dom";

type TInputs = {
    email: string;
    codeAcess: string;
}

const WaiterInitialPage = () => {
    const [_, setLogged] = useAtom(isLogged)
    const { register, handleSubmit } = useForm<TInputs>()
    
    const navegation = useNavigate()

    const onSubmit: SubmitHandler<TInputs> = async (data: any) => {
        try {
            const res = await api.post("/session/validated", data)
            localStorage.setItem("@acess", JSON.stringify(res.data))
            setLogged(res.data)
            if(res.data.acess === "waiter") {
                navegation("/menu")
            }else {
                navegation("/pedidos")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <main>
                <Section typeSection="display_login">
                    <Form typeForm="display_waiter_initial" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Email do colaborador</label>
                        <StyleInput styleInput="login" placeholder="Digite seu nome" {...register("email")} type="text" />
                        <label htmlFor="">Senha do colaborador</label>
                        <StyleInput styleInput="login" placeholder="Digite seu codigo" {...register("codeAcess")} type="password" />
                        <StyleButton styleButton="login" type="submit">Entrar</StyleButton>
                    </Form>
                </Section>
            </main>
        </>
    )
}

export default WaiterInitialPage;