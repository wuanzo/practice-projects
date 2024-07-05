let playerMove
let index
let computerMove
const moves = ["ROCK", "PAPER", "SCISSORS"]
const chosenPicture = document.getElementById("chosenPicture")
const computerMovePic = document.getElementById("computerMovePic")


function rock() {
  index = Number(document.getElementById("rock").value) 
  playerMove = moves[index]
  chosenPicture.innerHTML = `<img src = "images/rock.png">`
  rps(playerMove);
}
function paper() {
  index = Number(document.getElementById("paper").value) 
  playerMove = moves[index]
  chosenPicture.innerHTML = `<img src = "images/paper.png">`
  rps(playerMove);
}
function scissors() {
  index = Number(document.getElementById("scissors").value) 
  playerMove = moves[index]
  chosenPicture.innerHTML = `<img src = "images/scissors.png">`
  rps(playerMove);
}

function rps(playerMove) {
  index = Math.floor(Math.random() * 3)
  computerMove = moves[index]
  computerMovePic.innerHTML = `<img src = "images/${computerMove}_flipped.png">`


  if(playerMove == "ROCK" && computerMove == "PAPER") {
   
  }

}