let playerMove
let index
let computerMove
const moves = ["ROCK", "PAPER", "SCISSORS"]
const chosenPicture = document.getElementById("chosenPicture")
const computerMovePic = document.getElementById("computerMovePic")
const youchose = document.getElementById("youchose")
const playerwin = document.getElementById("playerwin")
const computerwin = document.getElementById("computerwin")
let playerscore = 0
let computerscore = 0
const yourscore = document.getElementById("yourscore")
const compscore = document.getElementById("compscore")


function rock() {
  index = Number(document.getElementById("rock").value) 
  playerMove = moves[index]
  chosenPicture.innerHTML = `<img src = "images/rock.png">`
  youchose.textContent = moves[index]
  rps(playerMove);
}
function paper() {
  index = Number(document.getElementById("paper").value) 
  playerMove = moves[index]
  chosenPicture.innerHTML = `<img src = "images/paper.png">`
  youchose.textContent = moves[index]
  rps(playerMove);
}
function scissors() {
  index = Number(document.getElementById("scissors").value) 
  playerMove = moves[index]
  chosenPicture.innerHTML = `<img src = "images/scissors.png">`
  youchose.textContent = moves[index]
  rps(playerMove);
}

function rps(playerMove) {

  playerwin.innerHTML = ""
  computerwin.innerHTML = ""

  index = Math.floor(Math.random() * 3)
  computerMove = moves[index]
  computerMovePic.innerHTML = `<img src = "images/${computerMove}_flipped.png">`
  compchose.textContent = moves[index]


  if(playerMove == "PAPER" && computerMove == "ROCK") {
   playerwin.innerHTML = `<p>WINNER <br> Score +1</p>`
   playerscore += 1
   yourscore.textContent = playerscore
  }
  else if(playerMove == "ROCK" && computerMove == "SCISSORS") {
    playerwin.innerHTML = `<p>WINNER <br> Score +1</p>`
    playerscore += 1
    yourscore.textContent = playerscore
  }
  else if(playerMove == "SCISSORS" && computerMove == "PAPER") {
    playerwin.innerHTML = `<p>WINNER <br> Score +1</p>`
    playerscore += 1
    yourscore.textContent = playerscore
  }
  else if(computerMove == "ROCK" && playerMove == "SCISSORS") {
    computerwin.innerHTML = `<p>WINNER <br> Score +1</p>`
    computerscore++
    compscore.textContent = computerscore
  }
  else if(computerMove == "PAPER" && playerMove == "ROCK") {
    computerwin.innerHTML = `<p>WINNER <br> Score +1</p>`
    computerscore++
    compscore.textContent = computerscore
  }
  else if(computerMove == "SCISSORS" && playerMove == "PAPER") {
    computerwin.innerHTML = `<p>WINNER <br> Score +1</p>`
    computerscore++
    compscore.textContent = computerscore
  }
  
}

function reset() {
  history.go(0)
}