import { foodRepository } from "../respository"

const create = async (food: any): Promise<any> => {
    const foodCreate = foodRepository.create(food)
    await foodRepository.save(foodCreate)
    return foodCreate
}
const read = async (): Promise<any[]> => {
    const foods = await foodRepository.find()
    return foods
}
const update = async (food: any, foodUpdate: any): Promise<any> => {
    const foodData = await foodRepository.save({...foodUpdate, ...food})
    return foodData
}
const destroy = async (food: any): Promise<void> => {
    await foodRepository.delete(food)
    return
}

export default { create, read, update, destroy }