// Create an array with possbile choices 
let choices = ["rock", "paper", "scissors", "spock", "lizard"];

// Rules for the game -
let rules = {
    rock: { scissors: "crushes", lizard: "crushes" },
    paper: { rock: "covers", spock: "disapproves" },
    scissors: { paper: "cuts", lizard: "decapitates" },
    spock: { rock: "vaporiz", scissors: "smashes" },
    lizard: { paper: "eats", spock: "poisons" },
}