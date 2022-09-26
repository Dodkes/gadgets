const automatedTextElement = document.getElementById('automatedText')
const elementTypeElement = document.querySelectorAll('.elementType')
const speed = 250
let timeout

elementTypeElement[0].textContent = '<h1>'
elementTypeElement[1].textContent = '</h1>'

const automatedText = 'xZitt - React developer bruh'

let splitText = automatedText.split('')
let finalText = ''
let index = 0




function typingFunction () {

    let element = document.createElement('p')
    automatedTextElement.appendChild(element)
    element.textContent = splitText[index]
    element.style.display = 'none'
    element.className = 'autoTypingParagraph'
    $(element).fadeIn(400)
    index++
    if (index == splitText.length) clearTimeout(timeout) 
}


const tag = document.getElementById('backgroundTag')
tag.textContent = '</>'

$(document).ready(() => {
     timeout = setInterval(typingFunction, speed)
     $(tag).fadeIn(1000)
})