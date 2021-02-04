// Start game when page is loaded
document.addEventListener("DOMContentLoaded", start);

let playerChoice;
let computerChoice;

let playerHand = document.querySelector("#player1");
let computerHand = document.querySelector("#player2");

let rock = document.querySelector("button.rock");
let paper = document.querySelector("button.paper");
let scissors = document.querySelector("button.scissors");


// Adding eventlisteners to options
function start() {
    console.log("start");

    rock.addEventListener("click", getPlayerChoice);
    paper.addEventListener("click", getPlayerChoice);
    scissors.addEventListener("click", getPlayerChoice);

}

function restartGame() {
    
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");

    playerHand.classList.remove("rock", "paper", "scissors");
    computerHand.classList.remove("rock", "paper", "scissors");



    //restart eventlisteners
    rock.addEventListener("click", getPlayerChoice);
    paper.addEventListener("click", getPlayerChoice);
    scissors.addEventListener("click", getPlayerChoice);
}

function getPlayerChoice() {
    console.log();

    rock.removeEventListener("click", getPlayerChoice);
    paper.removeEventListener("click", getPlayerChoice);
    scissors.removeEventListener("click", getPlayerChoice);

    playerChoice = this;
    console.log(playerChoice);

    getComputerSelectionRandom();
}

function getComputerSelectionRandom() {
    console.log("random computer selection");

    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    convertComputerSelectionRandom();
}

function convertComputerSelectionRandom() {
    if (computerChoice == 0) {
        computerChoice = "rock";
    }
    if (computerChoice == 1) {
        computerChoice = "paper";
    }
    if (computerChoice == 2) {
        computerChoice = "scissors";
    }
    console.log(computerChoice);

    showAnimations();
}

function showAnimations() {

    playerHand.classList.add("shake");
    computerHand.classList.add("shake");

    console.log("showAnimations");
    
    playerHand.addEventListener("animationend", newSprite);

}

function newSprite() {

    if (playerChoice == rock) {
        playerHand.classList.remove("shake");
        playerHand.classList.add("rock");
    }
    if (playerChoice == paper) {
        playerHand.classList.remove("shake");
        playerHand.classList.add("paper");
    }
    if (playerChoice == scissors) {
        playerHand.classList.remove("shake");
        playerHand.classList.add("scissors");
    }

    if (computerChoice == "rock") {
        computerHand.classList.remove("shake");
        computerHand.classList.add("rock");
    }
    if (computerChoice == "paper") {
        computerHand.classList.remove("shake");
        computerHand.classList.add("paper");
    }
    if (computerChoice == "scissors") {
        computerHand.classList.remove("shake");
        computerHand.classList.add("scissors");
    }

    determineWinner();
}

function determineWinner() {
    console.log("determine winner");

    // if player won
    if (playerChoice == rock && computerChoice == "rock") {
        showDraw();
    } 
    
    if (playerChoice == rock && computerChoice == "paper") {
        showLoss();
    } 
    
    if (playerChoice == rock && computerChoice == "scissors") {
        showWin();
    }
    if (playerChoice == paper && computerChoice == "rock") {
        showWin();
    } 
    
    if (playerChoice == paper && computerChoice == "paper") {
        showDraw();
    } 
    
    if (playerChoice == paper && computerChoice == "scissors") {
        showLoss();
    }
    if (playerChoice == scissors && computerChoice == "rock") {
        showLoss();
    } 
    
    if (playerChoice == scissors && computerChoice == "paper") {
        showWin();
    } 
    
    if (playerChoice == scissors && computerChoice == "scissors") {
        showDraw();
    }
}

function showWin() {
    console.log("show win");

    document.querySelector("#win").classList.remove("hidden"); 
    document.querySelector("#win").addEventListener("click", restartGame);   
}

function showLoss() {
    console.log("show loss");

    document.querySelector("#lose").classList.remove("hidden");
    document.querySelector("#lose").addEventListener("click", restartGame);
}

function showDraw() {
    console.log("show draw");

    document.querySelector("#draw").classList.remove("hidden");
    document.querySelector("#draw").addEventListener("click", restartGame);
}