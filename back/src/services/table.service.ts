import { tableRepository } from "../respository"

const create = async (table: any): Promise<any> => {
    const tableCreate = tableRepository.create(table)
    await tableRepository.save(tableCreate)
    return tableCreate
}
const read = async (): Promise<any[]> => {
    const tables = await tableRepository.find()
    return tables
}
const update = async (table: any, tableUpdate: any): Promise<any> => {
    const tableData = await tableRepository.save({...tableUpdate, ...table})
    return tableData
}
const destroy = async (table: any): Promise<void> => {
    await tableRepository.delete(table)
    return
}

export default { create, read, update, destroy }