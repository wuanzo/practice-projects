const choices = ["rock", "paper", "scissors"];
const playerMoveDisplay = document.getElementById("playerMoveDisplay");
const computerMoveDisplay = document.getElementById("computerMoveDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const compEmotions = document.getElementById('compEmotions');
const rgbBtn = document.getElementById('rgbBtn');
const moves = document.querySelectorAll('.moves');
const blinkingText = document.getElementById('blinkingText');
const surrenderMsg = document.getElementById('surrender-msg-container');
const tauntComputer = document.getElementById('tauntComputer');

let result = null;
let computerChoice = null;
let playerScore = 0;
let computerScore = 0;
const lead = 3;
const superLead = 5;


function playGame(playerChoice){
    tauntComputer.style.visibility = 'hidden';
    surrenderMsg.style.visibility = 'hidden';
    blinkingText.style.display= 'none';
    resultDisplay.textContent = '';

    resultDisplay.classList.remove('greenText', 'redText');

    computerChoice = choices[Math.floor(Math.random() * 3)];

    playerMoveDisplay.textContent = playerChoice.toUpperCase();
    computerMoveDisplay.textContent = computerChoice.toUpperCase();

    if(playerChoice === computerChoice) {

        
        resultDisplay.textContent = "IT'S A TIE ⚔";

    } else {
        switch(playerChoice){
            case 'rock':
                result = computerChoice === 'scissors' ? 'YOU WIN!🥇' : 'YOU LOSE!💀';
                break;
            case 'paper':
                result = computerChoice === 'rock' ? 'YOU WIN!🥇' : 'YOU LOSE!💀';
                break;
            case 'scissors':
                result = computerChoice === 'paper' ? 'YOU WIN!🥇' : 'YOU LOSE!💀';
                break;
        }

        resultDisplay.textContent = result;

        if(result.startsWith('YOU WIN!🥇')){
            
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = String(playerScore).padStart(2, '0');
        } else{
            resultDisplay.classList.add('redText');

            computerScore++;
            computerScoreDisplay.textContent = String(computerScore).padStart(2, '0');
        }
    }

    if(computerScore - playerScore >= lead) {
        compEmotions.textContent = '💤';
    } else if(playerScore - computerScore >= lead) {
        compEmotions.textContent = '💢';
    } else {
        compEmotions.textContent = '💬';
    }


    if(computerScore - playerScore >= superLead) {
        surrenderMsg.style.visibility = 'visible';
    } else if(playerScore - computerScore >= superLead) {
        tauntComputer.style.visibility = 'visible';
    }

    localStorage.setItem('playerScore', playerScore);
}


function rgbBorders(){
    rgbBtn.classList.toggle('rgbBtn-styles');

    moves.forEach(move => {
        move.classList.toggle('rgb-animation')
    })
}

function surrender(){
    
}
