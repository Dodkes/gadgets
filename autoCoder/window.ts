const heading = document.querySelector<HTMLHeadElement>('#autoTyper')
const autoTyper = document.querySelector<HTMLDivElement>('#autoTyper')
const divTextElement = document.querySelector<HTMLDivElement>('#div-element-as-text')
const divTextElementClosing = document.querySelector<HTMLDivElement>('#backElement')
const htmlContainer = document.querySelector<HTMLDivElement>('#textContent')

const typescriptContainer = document.querySelector<HTMLDivElement>('#typescript')
const typescriptTextElement = document.querySelector<HTMLDivElement>('#typescriptText')
const dot = document.querySelector<HTMLDivElement>('.dot')
const tsTextContent = document.querySelector<HTMLDivElement>('.textContent')

const typingSpeed: number = 200
const transitionSpeed: number = 500
let typescriptInterval
let index: number = 0
//HTML TEXT
const text: string = 'h1#heading'
const splitText: string[] = text.split('')
let finalText: string = ''
//TS TEXT
const tsText: string = 'heading'
const splitTsText: string[] = tsText.split('')
console.log(splitTsText)


function typingFunction () {
        if (heading){
            heading.textContent = finalText += splitText[index]
            index++
        } 
        if (index == splitText.length) {
            clearInterval(interval)
            setTimeout(typeDiv, transitionSpeed);
        }
}

const interval = setInterval(typingFunction, typingSpeed)

function typeDiv () {
    if (heading) heading.textContent = ''
    if (divTextElement) divTextElement.style.display = 'inline'
    if (divTextElementClosing) divTextElementClosing.style.display = 'inline'
    setTimeout(startTypescript, 2000);
}

function startTypescript () {
    if (htmlContainer) htmlContainer.style.display = 'none'
    if (typescriptContainer) typescriptContainer.style.display = 'block'
    index = 0
    finalText = ''
    setTimeout(() => { typescriptInterval = setInterval(typingTypescript, typingSpeed) }, transitionSpeed);       
}

function typingTypescript () {
    if (typescriptTextElement && index < 7) typescriptTextElement.textContent = finalText += splitTsText[index]
    index++
    if (index == 7) {
        if (dot) dot.style.cssText = 'display: inline;'
        console.log('enough')
        if (tsTextContent){
            tsTextContent.style.display = 'inline'
        }
    } else if (index == 8) {
        clearInterval(typescriptInterval)
    }
}