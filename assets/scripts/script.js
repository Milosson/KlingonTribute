// Create an array with possbile choices 
let choices = ["rock", "paper", "scissors", "spock", "lizard"];

// Rules for the game - This way of object mapping was inspired by 'Code Therapy @ YouTube' https://www.youtube.com/watch?v=wT1pwM7hRtQ&ab_channel=CodingTherapy
// And also ThatSoftwareDude.com - https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
// I found this way of object literal to be easier for me rather than switch case.
let rules = {
    rock: { scissors: "crushes", lizard: "crushes" },
    paper: { rock: "covers", spock: "disapproves" },
    scissors: { paper: "cuts", lizard: "decapitates" },
    spock: { rock: "vaporizes", scissors: "smashes" },
    lizard: { paper: "eats", spock: "poisons" },
};

// Variable to keep track of total rounds. 
let totalRounds = 0;

// Variable to keep track wheter the game is over or not.
let gameOver = false;

// Variables for scoreboard both for user and computer.
let playerScore = 0;
let computerScore = 0;

// Map for choices to emojis - This emoji map was inspired by Hackernoon.com https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy
// I prefer to use the unicode for cross-platform compatibility, readability and maintanability. 
const emojiMap = {
    rock: '\uD83D\uDDFF', // 🗿
    paper: '\uD83D\uDCC3', // 📃
    scissors: '\u2702\uFE0F', // ✂️
    spock: '\uD83D\uDC7D', // 👽
    lizard: '\uD83E\uDD8E', // 🦎
};

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

    // Compare userChoice with computerChoice to check for a tie.
    if (userChoice === computerChoice) {
        result.textContent = "It's a tie!";
        message.textContent = "You and the computer both chose " + userChoice + ".";

        // Create an emoji element to display a Tie if that result appears.
        let emoji = document.createElement('span');
        emoji.textContent = '\uD83D\uDC54';
        emoji.style.fontSize = '24px';
        emoji.style.marginLeft = '10px';
        // Append the Tie emoji to the result
        result.append(emoji);

        // Player wins based on game rules
    } else if (userChoice in rules && computerChoice in rules[userChoice]) {
        result.textContent = "You win!";
        message.textContent = `You chose ${userChoice} ${emojiMap[userChoice]} and the computer chose ${computerChoice} ${emojiMap[computerChoice]}. ${userChoice} ${rules[userChoice][computerChoice]} ${computerChoice}.`;
        playerScore++;
        // Player lose based on game rules
    } else {
        result.textContent = "You lose!";
        message.textContent = `You chose ${userChoice} ${emojiMap[userChoice]} and the computer choose ${computerChoice} ${emojiMap[computerChoice]}. ${computerChoice} ${rules[computerChoice][userChoice]} ${userChoice}.`;
        computerScore++;
    }

    //Increment the total rounds to reach 5 rounds played. If so, end the game; otherwise, uddate the score.
    totalRounds++;
    // If 5 rounds have been played, gameOver activates.
    if (totalRounds === 5) {
        endGame();
        // If fewer than 5 rounds have been played, update the scoreboard.
    } else {
        updateScoreBoard();
    }
}
// function endGame to determine if best of 5 rounds is reached.
function endGame() {
    gameOver = true; //Set the game as over.

    let gameResultContainer = document.getElementById('gameResultContainer');

    // Determine the winner.
    let winner;
    if (playerScore > computerScore) {
        winner = 'Player';
    } else if (playerScore < computerScore) {
        winner = 'Computer';
    } else {
        winner = "It's a tie!";
    }
    // Create the content for the result popup.
    let popupContent = `<h2>Game Over!</h2>`;

    // Declare roundWinner - correct after debug.
    let roundWinner;
    //Declaring i outside loop - corrected after debug.
    let i;
    //Declaring userChoice and computerChoice outside the loop - corrected after debug.
    let userChoice;
    let computerChoice;

    // Iterate through each round and display details
    for (i = 1; i <= totalRounds; i++) {

        if (i <= playerScore) {
            roundWinner = 'Player';
        } else if (i <= computerScore) {
            roundWinner = 'Computer';
        } else {
            roundWinner = "It's a tie!";
        }
        // Users choice based on index from choices.   
        userChoice = choices[i - 1];
        // Computers choice randomized from the choices.
        computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Determine the emoji for roundWinner
        let roundWinnerEmoji;
        if (roundWinner === 'Player') {
            roundWinnerEmoji = emojiMap[userChoice]; // Use the emoji chosen by the player
        } else if (roundWinner === 'Computer') {
            roundWinnerEmoji = emojiMap[computerChoice]; // Use the emoji chosen by the computer
        } else {
            roundWinnerEmoji = '\uD83D\uDC54'; // Tie-emoji assuming it's a 'tie'
        }

        // Append the content for each round.
        popupContent +=
            `<p>Round ${i}: You chose ${emojiMap[userChoice]} 
    - Computer chose ${emojiMap[computerChoice]} 
    - Winner is: ${roundWinner} ${roundWinnerEmoji}</p>
    `;
    }

    // Add the overall winner and Play again button.
    popupContent += ` 
<p>The winner is: ${winner} with: ${playerScore} vs ${computerScore}</p>
<button onclick="restartGame()">Play Again</button>
`;

    // Set innerHTML of gameResultContainer
    gameResultContainer.innerHTML = popupContent;
    // Display the gameResultContainer
    gameResultContainer.style.display = 'flex';

    // Reset the score and total rounds for new game.
    playerScore = 0;
    computerScore = 0;
    totalRounds = 0;
}


// function restartGame 
function restartGame() {
    // Hide the gameResultContainer
    document.getElementById('gameResultContainer').style.display = 'none';

    //Reset totalRounds to 0 
    totalRounds = 0;

    // Check if the game is not over before reset 
    if (!gameOver) {

        // Display the message or perform any other actions needed for the restart
        alert('Game restarted!');
    }
    // Reset game variables
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    // clear the result and message elements
    result.textContent = '';
    message.textContent = '';
    // update the score
    updateScoreBoard();

}





