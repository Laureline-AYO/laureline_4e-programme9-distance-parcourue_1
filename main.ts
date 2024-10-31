input.onButtonPressed(Button.A, function () {
    basic.showNumber(distance)
})
input.onButtonPressed(Button.AB, function () {
    distance = 0
    basic.showNumber(distance)
})
let distance = 0
distance = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        distance += 0.25
    }
})
