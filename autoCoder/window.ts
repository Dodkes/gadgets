const heading = document.querySelector<HTMLHeadElement>('#autoTyper')
const autoTyper = document.querySelector<HTMLDivElement>('#autoTyper')
const divTextElement = document.querySelector<HTMLDivElement>('#div-element-as-text')
const divTextElementClosing = document.querySelector<HTMLDivElement>('#backElement')
const typingSpeed: number = 200
const transitionSpeed: number = 1500
let index: number = 0
const text: string = 'h1#heading'
let finalText: string = ''
const splitText: string[] = text.split('')

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
}