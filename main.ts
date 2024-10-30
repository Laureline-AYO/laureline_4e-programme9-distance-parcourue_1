input.onButtonPressed(Button.A, function () {
    basic.showNumber(distance)
})
input.onButtonPressed(Button.AB, function () {
    distance = 0
    basic.showNumber(distance)
})
input.onGesture(Gesture.Shake, function () {
    distance += 0.25
})
input.onGesture(Gesture.LogoDown, function () {
    distance += 0.25
})
let distance = 0
distance = 0
