const container = document.querySelector('#circle-container')
const disappearSpeed: number = 700
const loopColors: string[] = ['#e6f7ff', '#cceeff', '#b3e6ff', '#99ddff', '#80d4ff', '#66ccff', '#4dc3ff', '#33bbff', '#1ab2ff', '#00aaff', '#0099e6', '#0088cc', '#0077b3', '#006699', '#005580', '#004466', '#00334d', '#002233', '#00111a',
'#290033', '#3d004d', '#520066', '#7a0099', '#8f00b3', '#a300cc', '#b800e6', '#cc00ff', '#d11aff', '#d633ff', '#db4dff', '#e066ff', '#e580ff', '#eb99ff', '#f0b3ff', '#fae6ff', '#ffffff']

let loopColorIndex: number = 0

class Draw {
    elementType: string
    element: HTMLElement
    posX: string
    posY: string
    color: string

    constructor (el: string, x: string, y: string, color: string) {
        this.elementType = el
        this.posX = x
        this.posY = y
        this.color = color
    }

    createDraw () {
        this.element = document.createElement(this.elementType)
        container?.appendChild(this.element)
        this.element.className = 'dot'
        this.element.style.top = this.posY + 'px'
        this.element.style.left = this.posX + 'px'
        this.element.style.backgroundColor = this.color

        this.element.style.boxShadow = `0px 0px 2px 2px ${this.color}`
        setTimeout(() => { this.element.remove() }, disappearSpeed);
    }
}

container?.addEventListener('mousemove', draw)


function draw (e) {
let [cursorPositionX, cursorPositionY] = [e.clientX, e. clientY]

    if (cursorPositionX < window.innerWidth - 5) {
        [cursorPositionX, cursorPositionY] = [e.clientX.toString(), e.clientY.toString()]
        let dot = new Draw('div', cursorPositionX, cursorPositionY, loopColors[loopColorIndex])
        dot.createDraw()

        console.log(loopColors[loopColorIndex])
        loopColorIndex++
        if (loopColorIndex == loopColors.length - 1) {
            loopColors.reverse()
            loopColorIndex = 0
        }
    }
}
