basic.forever(function () {
    for (let Index = 0; Index <= 4; Index++) {
        turtle.forward(4 - Index)
        turtle.turnRight()
    }
    for (let Index = 0; Index <= 4; Index++) {
        turtle.turnLeft()
        turtle.back(Index)
    }
})
