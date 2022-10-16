const circle = document.querySelector('.circle')
const container = document.querySelector('#circle-container')
const speed: number = 20

class Dot {
    elementType: string
    className: string
    element: HTMLElement
    positionX: number = 50

    constructor (el: string, cl: string) {
        this.elementType = el
        this.className = cl
        this.element = document.createElement(this.elementType)
    }

    createDot () {
        this.element.className = this.className
        circle?.appendChild(this.element)
    }

    moveDot () {
        setInterval(() => {
            this.element.style.top = this.positionX++ + '%'
        }, speed)
    }

}

// const dots = new Dot('div', 'medium-dot')
// dots.createDot()

// const dotse = new Dot('div', 'large-dot')
// dotse.createDot()

const dotses = new Dot('div', 'small-dot')
dotses.createDot()
dotses.moveDot()