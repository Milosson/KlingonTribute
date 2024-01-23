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
