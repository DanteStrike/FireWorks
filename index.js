const button = document.querySelector('#button');

button.addEventListener('click', () => {});

const container = document.querySelector('#firework')
const fireworks = new Fireworks.default(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.02,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 60
    },
    delay: {
        min: 30,
        max: 60
    },
    rocketsPoint: {
        min: 0,
        max: 100
    },
    lineWidth: {
        explosion: {
            min: 1,
            max: 4
        },
        trace: {
            min: 0.1,
            max: 1
        }
    },
    brightness: {
        min: 50,
        max: 80
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: true,
        move: false,
        max: 5
    }
})
fireworks.start()
