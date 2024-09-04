const text = document.querySelector('#text');
const inputField = document.querySelector('#inputField');
const tryAgainBtn = document.querySelector('#tryAgain');
const mistakeTag = document.querySelector('#mistakeTag');
const wpmTag = document.querySelector('#wpmTag');
const accTag = document.querySelector('#accTag');
const timerTag = document.querySelector('#timerTag');

const wordCount = 100;
const maxTime = 60;

let timeLeft = maxTime;
let timerInterval;
let charIndex = 0;
let correctChars = 0;
let mistakes = 0;
let wpm = 0;
let acc = 0;
let isTyping = false;


tryAgainBtn.addEventListener('click', () => location.reload());

text.addEventListener('click', () => {
    inputField.focus();
    characters[charIndex].classList.add('active');
})

function randomWords() {
    for(let i = 0; i < wordCount; i++) {   
        const randIndex = Math.floor(Math.random() * wordsArray.length);
        wordsArray[randIndex].split('').forEach(char => {
            const span = document.createElement('span');
            span.innerHTML = char;
            text.appendChild(span);
        })
        const space = document.createElement("span");
        space.innerHTML = " ";
        text.appendChild(space);
    }
    inputField.value = '';
}

function startTyping() {
    inputField.addEventListener('keydown', (ev) => {

        if(timeLeft > 0 && charIndex < characters.length - 1) {

            if(ev.ctrlKey && ev.key === 'Backspace'){
                ev.preventDefault();
    
                const cursorPos = inputField.selectionStart;
                const textBefore = inputField.value.slice(0, cursorPos);
                const textAfter = inputField.value.slice(cursorPos);
    
                const newTextBefore = textBefore.replace(/\b\w+\s*$/, '');
    
                inputField.value = newTextBefore + textAfter;
    
                inputField.selectionStart = newTextBefore.length;
                inputField.selectionEnd = newTextBefore.length;
            }
    
            if(ev.key === 'Backspace'){
                if(charIndex > 0){
                    charIndex--;
                    characters[charIndex].classList.remove('correct', 'incorrect');
                }
            }
    
            if(ev.key.length === 1){
    
                if(!isTyping){
                    timerInterval = setInterval(timer, 1000);
                    isTyping = true;
                }
    
                if(ev.key === characters[charIndex].innerHTML){
                    characters[charIndex].classList.add('correct');
                    correctChars++;
                } else {
                    mistakes++;
                    characters[charIndex].classList.add('incorrect');
                }
                charIndex++;

                displayStats();
            }
            characters.forEach(span => span.classList.remove('active'));
            if(charIndex < characters.length - 1) {
                characters[charIndex].classList.add('active');
            }

        } else {
            clearInterval(timerInterval);
            inputField.disabled = true;
        }

    })
}

function displayStats() { 
    acc = Math.round((correctChars / (correctChars + mistakes)) * 100);
    accTag.innerHTML = acc + '%';
    mistakeTag.innerHTML = mistakes; 
}

function updateWPM() {
    wpm = Math.round(((correctChars / 5) / (maxTime - timeLeft)) * 60);
    wpm = (wpm < 0 || !wpm || wpm === Infinity) ? 0 : wpm;
    wpmTag.innerHTML = wpm;
}

function timer() {
    if(timeLeft > 0 && charIndex < characters.length - 1){
        timeLeft--;
        timerTag.innerHTML = timeLeft;
        updateWPM();
    } else {
        clearInterval(timerInterval);
        inputField.disabled = true;
    }
}



randomWords();
const characters = text.querySelectorAll('span');
characters[charIndex].classList.add('active');
inputField.focus();
startTyping();









