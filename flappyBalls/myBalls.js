const container = document.querySelector(".container");
const groundContainer = document.querySelector(".ground-container");
const box = document.querySelector(".box");
const theBtn = document.querySelector(".clickMe");
const reloadBtn = document.querySelector(".reloadBtn");
let intervalId = null;
let intervalId2 = null;
let timeoutId = null;
let timeoutIds = [];
let score = 0;
let gameRunning = false;
const scoreTag = document.querySelector("#scoreCount");
const highScoreTag = document.querySelector("#highScore");
let highScore = localStorage.getItem("highScore");
highScoreTag.innerHTML = `${highScore.padStart(3, "0")}`;

theBtn.addEventListener("click", (eve)=> {

    if(!gameRunning){
        gameRunning = true;
        theBtn.disabled = true;
        groundContainer.classList.add("groundMovingAnimation");
        intervalId = setInterval(
            () => {
            const randomTime = Math.random() * 1000 + 2500;
    
            timeoutId = setTimeout(obstacleGenerator, randomTime);
            timeoutIds.push(timeoutId);
            
        }, 1500)
        
    }    
    theBtn.blur();
})

box.addEventListener("animationend", () => {
    box.classList.remove("jump");
})

document.addEventListener("keydown", (eve) => {
    if(eve.key === " "){
        eve.preventDefault();
        box.classList.add("jump");
    }
})

function obstacleGenerator(){
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle", "obstacleAnimation");
    container.appendChild(obstacle);

    const randomHeight = Math.random() * 15 + 25;
    obstacle.style.borderBottom = `${randomHeight}px solid gray`;
    
    intervalId2 = setInterval(() => {
        if(collisionDetection(obstacle)){
            gameOver();
        }
    }, 50)

    obstacle.addEventListener("animationend", ()=> {
        obstacle.remove();  
        score++;
        if(score > highScore){
            highScore = score;
            localStorage.setItem("highScore", highScore);
            highScoreTag.innerHTML = `${localStorage.getItem("highScore").toString().padStart(3, "0")}`;
        }
        scoreTag.innerHTML = score.toString().padStart(3, "0");
    });
}

function collisionDetection(obstacle){
    const boxRect = box.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    
    return !(boxRect.right < obstacleRect.left || boxRect.left > obstacleRect.right || boxRect.bottom < obstacleRect.top || boxRect.top > obstacleRect.bottom);
}

function gameOver(){
    gameRunning = false;
    theBtn.disabled = false;
    clearInterval(intervalId);
    clearInterval(intervalId2)
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];
    groundContainer.classList.remove("groundMovingAnimation");
    document.querySelectorAll(".obstacle").forEach(obstacle => obstacle.remove());
    endModal();
}

function endModal(){
    document.querySelector("#my_modal").showModal();
    document.querySelector("#closeBtn").addEventListener("click", () => {
        document.querySelector("#my_modal").close();
        score = 0;
        scoreTag.innerHTML = `${score.toString().padStart(3, "0")}`;
    })
    document.querySelector("#scoreModal").innerHTML = `Your Score: ${score.toString().padStart(3, "0")}`;
    document.querySelector("#highScoreModal").innerHTML = `High Score: ${highScore.toString().padStart(3, "0")}`;
}



reloadBtn.addEventListener("click", () => {
    location.reload();
})
