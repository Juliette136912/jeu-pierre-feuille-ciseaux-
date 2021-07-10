radio.onReceivedNumber(function (receivedNumber) {
    if (nombre == 2 && receivedNumber == 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (nombre == 1 && receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (nombre == 0 && receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (nombre == 2 && receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    }
    if (nombre == 0 && receivedNumber == 2) {
        basic.showIcon(IconNames.Happy)
    }
    if (nombre == 1 && receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    nombre = 3
})
input.onGesture(Gesture.Shake, function () {
    nombre = randint(0, 2)
    if (nombre == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        radio.sendNumber(0)
    } else {
        if (nombre == 1) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            radio.sendNumber(1)
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            radio.sendNumber(2)
        }
    }
})
let nombre = 0
nombre = 3
