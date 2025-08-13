basic.showIcon(IconNames.Happy)
let speed = 0
basic.forever(function () {
    if (speed == 100) {
        speed = 0
    }
    speed += 1
})
