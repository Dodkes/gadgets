var heading = document.querySelector('#autoTyper');
var autoTyper = document.querySelector('#autoTyper');
var divTextElement = document.querySelector('#div-element-as-text');
var divTextElementClosing = document.querySelector('#backElement');
var htmlContainer = document.querySelector('#textContent');
var typescriptContainer = document.querySelector('#typescript');
var typescriptTextElement = document.querySelector('#typescriptText');
var dot = document.querySelector('.dot');
var tsTextContent = document.querySelector('.textContent');
var typingSpeed = 200;
var transitionSpeed = 500;
var typescriptInterval;
var index = 0;
//HTML TEXT
var text = 'h1#heading';
var splitText = text.split('');
var finalText = '';
//TS TEXT
var tsText = 'heading';
var splitTsText = tsText.split('');
console.log(splitTsText);
function typingFunction() {
    if (heading) {
        heading.textContent = finalText += splitText[index];
        index++;
    }
    if (index == splitText.length) {
        clearInterval(interval);
        setTimeout(typeDiv, transitionSpeed);
    }
}
var interval = setInterval(typingFunction, typingSpeed);
function typeDiv() {
    if (heading)
        heading.textContent = '';
    if (divTextElement)
        divTextElement.style.display = 'inline';
    if (divTextElementClosing)
        divTextElementClosing.style.display = 'inline';
    setTimeout(startTypescript, 2000);
}
function startTypescript() {
    if (htmlContainer)
        htmlContainer.style.display = 'none';
    if (typescriptContainer)
        typescriptContainer.style.display = 'block';
    index = 0;
    finalText = '';
    setTimeout(function () { typescriptInterval = setInterval(typingTypescript, typingSpeed); }, transitionSpeed);
}
function typingTypescript() {
    if (typescriptTextElement && index < 7)
        typescriptTextElement.textContent = finalText += splitTsText[index];
    index++;
    if (index == 7) {
        if (dot)
            dot.style.cssText = 'display: inline;';
        console.log('enough');
        if (tsTextContent) {
            tsTextContent.style.display = 'inline';
        }
    }
    else if (index == 8) {
        clearInterval(typescriptInterval);
    }
}
