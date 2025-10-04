import api from "./api";

export interface User{
    id: number
    nombre: string
    email: string
    creadoEn?: string
    createdAt?: string
}

export const getUsers = async() : Promise<User[]> => {
    const {data} = await api.get('/users')
    return data
}