import { compare } from "bcryptjs";
import { AppError } from "../error/AppError";
import { TSessionRequest, TSessionResponse } from "../interfaces/session.interface";
import { userRepository } from "../respository";
import { sign } from "jsonwebtoken";

const login = async (user: TSessionRequest): Promise<TSessionResponse> => {
    const myUser = await userRepository.findOneBy({
        email: user.email
    }) 
    
    if(!myUser) throw new AppError("Usuário inválido", 401)
    
    const valitadPassword = await compare(user.password, myUser.password)

    if(!valitadPassword) throw new AppError("Usuário inválido", 401)

    const myToken = sign({email: myUser.email, admin: myUser.isAdmin }, process.env.SECRET_KEY!, { subject: myUser.id.toString(), expiresIn: process.env.EXPIRES_IN})

    return { token: myToken }
}

const validatedAcess = async (user: any): Promise<any> => {
    const myUser: any = { id: user.id }
    if(user.waiter){
      myUser.acess = "waiter"
    }else if (user.kitchen) {
      myUser.acess = "kitchen"
    }
    return myUser
}

export default { login, validatedAcess }