const automatedTextElement = document.getElementById('automatedText')
const elementTypeElement = document.querySelectorAll('.elementType')
const speed = 100

elementTypeElement[0].textContent = '<h1>'
elementTypeElement[1].textContent = '</h1>'

const automatedText = 'React developer bruh'

let splitText = automatedText.split('')
let finalText = ''
let index = 0


const timeout = setInterval(typingFunction, speed)


function typingFunction () {
    automatedTextElement.textContent = finalText += splitText[index]
    index++
    if (index == splitText.length) clearTimeout(timeout)
}
