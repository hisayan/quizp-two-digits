input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 99; i++) {
        towDigits.showNumber(i, true)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    towDigits.showNumber(123, true)
})
input.onButtonPressed(Button.B, function () {
    for (let j = 0; j <= 102; j++) {
        towDigits.showNumber(3 - j, true)
        basic.pause(200)
    }
})
