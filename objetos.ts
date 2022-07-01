type Point = {
    x: number,
    y: number
}
function printCord(point: Point) {
    console.log(`O eixo X é: ${point.x} e o eixo Y é: ${point.y}`)
}

printCord({ x: 121.2, y: 324.54 })