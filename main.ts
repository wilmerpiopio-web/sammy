let angulo = 0
let extension = 0

input.onButtonPressed(Button.A, function () {
    angulo = 180
    extension = 45
    moverPulpo(angulo, extension)
})

input.onButtonPressed(Button.B, function () {
    angulo = 360
    extension = 90
    moverPulpo(angulo, extension)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    angulo = 0
    extension = 0
    moverPulpo(angulo, extension)
})

basic.forever(function () {
    basic.pause(1000)
})

function moverPulpo(grados: number, ext: number) {
    if (grados == 180) {
        // gira suavemente desde la posición actual hasta 180
        for (let i = angulo; i <= 180; i += 5) {
            pins.servoWritePin(AnalogPin.P1, i)
            basic.pause(30)
        }
        angulo = 180
        // estira patas a 45 graditos
        for (let j = extension; j <= 45; j += 5) {
            pins.servoWritePin(AnalogPin.P2, j)
            basic.pause(40)
        }
        extension = 45
    } else if (grados == 360) {
        // simulamos 360° con dos pasadas 0..180
        for (let vuelta = 0; vuelta < 2; vuelta++) {
            for (let i = 0; i <= 180; i += 5) {
                pins.servoWritePin(AnalogPin.P1, i)
                basic.pause(20)
            }
            // regreso rápido para seguir la segunda mitad
            for (let i = 180; i >= 0; i -= 10) {
                pins.servoWritePin(AnalogPin.P1, i)
                basic.pause(8)
            }
        }
        angulo = 0 // dejamos la variable en 0 porque el servo volvió a 0 al final
        // estira patas a 90 grados
        for (let j = extension; j <= 90; j += 5) {
            pins.servoWritePin(AnalogPin.P2, j)
            basic.pause(30)
        }
        extension = 90
    } else {
        // volver a posición 0 suavemente (tanto cuerpo como patas)
        for (let i = angulo; i >= 0; i -= 5) {
            pins.servoWritePin(AnalogPin.P1, i)
            basic.pause(20)
        }
        angulo = 0
        for (let j = extension; j >= 0; j -= 5) {
            pins.servoWritePin(AnalogPin.P2, j)
            basic.pause(20)
        }
        extension = 0
    }
}basic.forever(function () {
	
})
