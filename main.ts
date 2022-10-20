radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("SI")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NO")
})
radio.setGroup(1)
