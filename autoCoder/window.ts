const heading = document.querySelector<HTMLHeadElement>('#autoTyper')
const autoTyper = document.querySelector<HTMLDivElement>('#autoTyper')
const divTextElement = document.querySelector<HTMLDivElement>('#div-element-as-text')
const divTextElementClosing = document.querySelector<HTMLDivElement>('#backElement')
const htmlContainer = document.querySelector<HTMLDivElement>('#textContent')

const typescriptContainer = document.querySelector<HTMLDivElement>('#typescript')
const typescriptTextElement = document.querySelector<HTMLDivElement>('#typescriptText')
const dot = document.querySelector<HTMLDivElement>('.dot')
const tsTextContent = document.querySelector<HTMLDivElement>('.textContent')
const cursorOne = document.querySelector<HTMLDivElement>('.cursor-1')

const equalElement = document.querySelector<HTMLDivElement>('.equal-element')
const typescriptTextContent = document.querySelector<HTMLDivElement>('.typescriptTextContent')
//SCSS elements
const scssContainer = document.querySelector<HTMLDivElement>('#scss')
const scssElementOne = document.querySelector<HTMLDivElement>('#scss-autotype-1')
const scssElementTwo = document.querySelector<HTMLDivElement>('#scss-autotype-2')

const colon = document.querySelector<HTMLDivElement>('.colon')
const comma = document.querySelector<HTMLDivElement>('.comma')
//OUTPUT elements
const outputHeading = document.querySelector<HTMLDivElement>('#output-heading')
const outputContainer = document.querySelector<HTMLDivElement>('#main-window-output')

const typingSpeed: number = 100
const transitionSpeed: number = 500
let typescriptInterval
let index: number = 0
//HTML TEXT
const text: string = 'h1#heading'
const splitText: string[] = text.split('')
let finalText: string = ''
//TS TEXT
const tsText: string = 'headingtextContent'
const splitTsText: string[] = tsText.split('')
//TS TEXT CONTENT
const tsTextContentText: string = "'I love typescript <3'"
const splitTsTextContentText: string[] = tsTextContentText.split('')
const realtsTextContentText: string = tsTextContentText.slice(1, tsTextContentText.length - 1)
//SCSS TEXT CONTENT
const scssTextContentOne: string = 'background-color'
const splitScssTextContentOne: string[] = scssTextContentOne.split('')

const scssTextContentTwo: string = ' $myColor'
const splitScssTextContentTwo: string[] = scssTextContentTwo.split('')

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

let interval = setInterval(typingFunction, typingSpeed)

function typeDiv () {
    if (cursorOne) cursorOne.style.display = 'none'
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
        if (tsTextContent){
            tsTextContent.style.display = 'inline'
        }
    } else if (index > 7) {
        if (finalText === 'heading') {finalText = ''; index-- }
        if (tsTextContent) tsTextContent.textContent = finalText += splitTsText[index]
        if (finalText === 'textContent') { 
            clearInterval(typescriptInterval) 
            setTimeout(() => { 
            if (equalElement) equalElement.style.display = 'inline'
            typescriptInterval = setInterval(typescriptTextContentFunction, typingSpeed)

            }, typingSpeed)
            finalText = ''
            index = 0
        }
    }
}

function typescriptTextContentFunction () {
    if (index < splitTsTextContentText.length) {
        finalText += splitTsTextContentText[index]
        if (typescriptTextContent){
            typescriptTextContent.style.display = 'inline'
            typescriptTextContent.textContent = finalText
        }
        index++
    } else {
        if (outputHeading) outputHeading.textContent = realtsTextContentText
        clearInterval(typescriptInterval)
        setTimeout(scssPrepare, transitionSpeed)
    }
}

function scssPrepare () {
    index = 0
    finalText = ''
    if (typescriptContainer) typescriptContainer.style.display = 'none'
    if (scssContainer) scssContainer.style.display = 'block'
    typescriptInterval = setInterval(scssTyping, typingSpeed)
}

function scssTyping () {
    if (scssElementOne && index < splitScssTextContentOne.length) {
        scssElementOne.style.display = 'inline'
        scssElementOne.textContent = finalText += splitScssTextContentOne[index]
        index++
    } else if (index == splitScssTextContentOne.length) {
        if (colon) colon.style.display = 'inline'
        clearInterval(typescriptInterval)
        typescriptInterval = setInterval(scssSecondTyping, typingSpeed)
        index = 0
        finalText = ''
    }
}

function scssSecondTyping () {
    if (scssElementTwo && index < splitScssTextContentTwo.length){
        scssElementTwo.style.display = 'inline'
        scssElementTwo.textContent = finalText += splitScssTextContentTwo[index]
        index++
    } else {
        if (comma) comma.style.display = 'inline'
        clearInterval(typescriptInterval)
        setTimeout(outputColorAndResetAutoTyper, transitionSpeed)
    }
}

function outputColorAndResetAutoTyper () {
    if (outputContainer) outputContainer.style.backgroundColor = '#9fdfbf'

    setTimeout(() => {
        interval = setInterval(typingFunction, typingSpeed)
    if (htmlContainer) htmlContainer.style.display = 'block'
    if (scssContainer) scssContainer.style.display = 'none'
    if (outputHeading) outputHeading.textContent = '404'
    if (outputContainer) outputContainer.style.backgroundColor = '#ffffff'
    if (divTextElement) divTextElement.style.display = 'none'
    if (typescriptTextElement) typescriptTextElement.textContent = ''
    if (dot) dot.style.display = 'none'

    if (colon) colon.style.display = 'none'
    if (comma) comma.style.display = 'none'
    if (scssElementOne) scssElementOne.textContent = ''
    if (scssElementTwo) scssElementTwo.textContent = ''

    if (typescriptTextContent) typescriptTextContent.textContent = ''
    if (equalElement) equalElement.style.display = 'none'
    if (tsTextContent) tsTextContent.textContent = ''


    finalText = ''
    index = 0
    }, transitionSpeed * 3);
}
