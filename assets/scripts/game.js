// Create an array with possbile choices 
let choices = ["rock", "paper", "scissors", "spock", "lizard"];

// Rules for the game - This way of object mapping was inspired by Hackernoon.com and Medium.com!
let rules = {
    rock: { scissors: "crushes", lizard: "crushes" },
    paper: { rock: "covers", spock: "disapproves" },
    scissors: { paper: "cuts", lizard: "decapitates" },
    spock: { rock: "vaporizes", scissors: "smashes" },
    lizard: { paper: "eats", spock: "poisons" },
}

// Variable to keep track of total rounds. 
let totalRounds = 0;

// Variable to keep track wheter the game is over or not.
let gameOver = false;

// Variables for scoreboard both for user and computer.
let playerScore = 0;
let computerScore = 0;

// Map for choices to emojis - This emoji map was inspired by Hackernoon.com! 
const emojiMap = {
    rock: '\uD83D\uDDFF', // 🗿 
    paper: '\uD83D\uDCC3', // 📃
    scissors: '\u2702\uFE0F', // ✂️
    spock: '\uD83D\uDC7D', // 👽  
    lizard: '\uD83E\uDD8E', // 🦎
}

// Elements to display result.
let result = document.getElementById('result');
let message = document.getElementById('message');

// function updateScoreBoard. 
function updateScoreBoard() {
    document.getElementById('playerScore').textContent = "Player: " + playerScore;
    document.getElementById('computerScore').textContent = "Computer: " + computerScore;
} 

// function play that includes score update.
function play(userChoice) {
    //Alert for gameOver function.
if (gameOver) {
    alert('Game over! Please click "Play Again" to start a new game.');
    return;
}
// Logics for computerChoice.
let computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Compare userChoice with computerChoice to determine winner.
if (userChoice === computerChoice) {
    result.textContent = "It's a tie!";
    message.textContent = "You and the computer both chose " + userChoice + ".";
}

}