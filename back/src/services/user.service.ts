import { TUserRequest, TUserResponse, TUserUpdate, TUsersResponse } from "../interfaces/user.interface"
import { userRepository } from "../respository"
import { userSchemaResponse, usersSchemaResponse } from "../schemas/user.schema"

const create = async (user: TUserRequest): Promise<TUserResponse> => {
    const userCreate = userRepository.create(user)
    await userRepository.save(userCreate)
    return userSchemaResponse.parse(userCreate)
}

const read = async (): Promise<TUsersResponse> => {
    const users = await userRepository.find()
    return usersSchemaResponse.parse(users)
}
const update = async (user: TUserRequest, userUpdate: TUserUpdate): Promise<TUserResponse> => {
    const userData = await userRepository.save({...userUpdate, ...user})
    return userSchemaResponse.parse(userData)
}
const destroy = async (user: TUserRequest): Promise<void> => {
    await userRepository.delete(user)
    return
}

export default { create, read, update, destroy }