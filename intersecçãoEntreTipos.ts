type Player = {
    id: number,
    name: string
}
type Char = {
    nickname: string,
    level: number,
}
type PlayerInfo  = Player & Char

let info : PlayerInfo = {
    id: 1,
    name: 'Sidney',
    nickname: 'sidney-the-best',
    level: 1
}

