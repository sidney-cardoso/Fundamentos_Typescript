type User = {
    name: string,
    age: number,
    email: string,
    // Quando eu coloco o ?, eu digo que o atributo pode é opcional
    isAdmin?: boolean
}
let newUser: User = {
    name: 'Sidney',
    age: 0,
    email: 'email@dom.com',
    isAdmin: true
} 