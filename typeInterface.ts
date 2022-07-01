// Diferenças entre type e interface

//  Type é mais simples de lidar com tipos primitivos
type TUser = {
    id: number,
    name: string
}
type TPayment = {
    method: string
}
type TAccount = TUser & TPayment


interface IUser {
    id: number,
    name: string
}
interface IPayment {
    method: string
}

interface IAccount extends IUser, IPayment {}
