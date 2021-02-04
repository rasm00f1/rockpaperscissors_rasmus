// Start game when page is loaded
document.addEventListener("DOMContentLoaded", start);

//initial choice variables
let playerChoice;
let computerChoice;

//initial player & computer sprite variables
let playerHand = document.querySelector("#player1");
let computerHand = document.querySelector("#player2");

//set gameplay buttons = to rock, paper, scissors
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

//restart the game
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

//remove eventlisteners and set playerChoice = to the clicked element
function getPlayerChoice() {
    console.log();

    rock.removeEventListener("click", getPlayerChoice);
    paper.removeEventListener("click", getPlayerChoice);
    scissors.removeEventListener("click", getPlayerChoice);

    playerChoice = this;
    console.log(playerChoice);

    getComputerSelectionRandom();
}

//set computerChoice to a random number from 0-2
function getComputerSelectionRandom() {
    console.log("random computer selection");

    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);

    convertComputerSelectionRandom();
}

//sets changes corrsponding number to either rock, paper or scissors
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

//add the class for the gameplay animation
function showAnimations() {

    playerHand.classList.add("shake");
    computerHand.classList.add("shake");

    console.log("showAnimations");
    
    playerHand.addEventListener("animationend", newSprite);

}

//change sprite for the hands so they correspond with the chosen option
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

//determine winner based on the choices made by player and computer
function determineWinner() {
    console.log("determine winner");

    // options if player chose rock
    if (playerChoice == rock && computerChoice == "rock") {
        showDraw();
    } 
    
    if (playerChoice == rock && computerChoice == "paper") {
        showLoss();
    } 
    
    if (playerChoice == rock && computerChoice == "scissors") {
        showWin();
    }

    //options if player chose paper
    if (playerChoice == paper && computerChoice == "rock") {
        showWin();
    } 
    
    if (playerChoice == paper && computerChoice == "paper") {
        showDraw();
    } 
    
    if (playerChoice == paper && computerChoice == "scissors") {
        showLoss();
    }

    //options if player chose scissors
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

//removes hide from the winning text and makes restart available
function showWin() {
    console.log("show win");

    document.querySelector("#win").classList.remove("hidden"); 
    document.querySelector("#win").addEventListener("click", restartGame);   
}

//removes hide from the winning text and makes restart available
function showLoss() {
    console.log("show loss");

    document.querySelector("#lose").classList.remove("hidden");
    document.querySelector("#lose").addEventListener("click", restartGame);
}

//removes hide from the winning text and makes restart available
function showDraw() {
    console.log("show draw");

    document.querySelector("#draw").classList.remove("hidden");
    document.querySelector("#draw").addEventListener("click", restartGame);
}