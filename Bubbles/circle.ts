const container = document.querySelector<HTMLDivElement>('#circle-container')
let [containerWidth, randomX]: number[] = [0, 0]
const allBubles: number = 4

class Bubble {
    elementType: string
    bubbleSize: string
    bubble: HTMLElement
    containerWidth: number
    randomX: number
    positionY: number
    bubbleMovementSpeed: number

    constructor (el: string, bubble: string) {
        this.elementType = el
        this.bubbleSize = bubble
    }

    createBubble () {
        this.bubble = document.createElement(this.elementType)
        container?.appendChild(this.bubble)
        this.bubble.className = this.bubbleSize
        this.bubbleMovementSpeed = Math.floor(Math.random() * 10)

        if (container?.offsetWidth !== undefined) {
            containerWidth = container.offsetWidth
            randomX = Math.floor(Math.random() * containerWidth)
            if (randomX > containerWidth - this.bubble.offsetWidth / 2) {
                randomX = randomX - this.bubble.offsetWidth / 2
            }
            if (randomX < this.bubble.offsetWidth) {
                randomX = this.bubble.offsetWidth / 2
            }
            this.positionY = container.offsetHeight - this.bubble.offsetHeight / 2
            this.bubble.style.left = `${randomX}px`
        }

    }

    moveBubble () {
        let opacity = 1

        let myInterval = setInterval(() => {
            this.bubble.style.top = `${this.positionY--}px`
            if (container?.offsetHeight && this.positionY < container?.offsetHeight / 4) {
                this.bubble.style.opacity = `${opacity += (- 0.02)}`
                if (container?.offsetHeight && this.positionY < 0) {
                    clearInterval(myInterval)
                    this.bubble.remove()
                    createBubble()
                }
            }
        },  this.bubbleMovementSpeed)
    }
}

//Start script from here whole script here
for (let i = 0; i < allBubles; i++) {
    createBubble()
}

function randomSizing (): any {
    let randomSizeNumber = Math.floor(Math.random() * 3 )
    if (randomSizeNumber === undefined) return (randomSizing)
    if (randomSizeNumber === 0) return 'small-bubble'
    if (randomSizeNumber === 1) return 'medium-bubble'
    if (randomSizeNumber === 2) return 'big-bubble'
}

function createBubble () {
    let newBubble = new Bubble ('div', randomSizing())
    newBubble.createBubble()
    newBubble.moveBubble()
}