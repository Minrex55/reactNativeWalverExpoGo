import api from "./api";

export interface User{
    id: number
    nombre: string
    email: string
    creadoEn?: string
    createdAt?: string
}
//Traer usuarios
export const getUsers = async() : Promise<User[]> => {
    const {data} = await api.get('/users')
    return data
}
//crear usuario
export const createUser = async(payload:{nombre: string, email: string}) => {
    const {data} = await api.post('/users', payload)
    return data
}

//editar usuario
export const updateUser = async(id:number, payload:{nombre?: string, email?: string}) => {
    const {data} = await api.put(`/users/${id}`, payload)
    return data
}

//eliminar usuario
export const deleteUser = async(id:number) => {
    const {data} = await api.delete(`/users/${id}`)
    return data
}