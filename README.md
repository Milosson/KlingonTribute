# Klingon Tribute - Rock Paper Scissors Spock Lizard. 🖖

## Welcome to Qo'noS game, where the classic Rock Paper Scissors game gets a Qo'noS twist! Engage in epic battles with familiar faces like Rock, Paper, Scissors, and brace yourself for the unexpected duo - Spock and Lizard. Are you ready to unleash the quirky chaos?
![Game Image Mockup](/assets/images/newfirstmockup.JPG) 

[Game Live Link URL](https://milosson.github.io/KlingonTribute/game.html)

## Table of Contents
* [Features](#Features)
* [Future Features](#future-features)
* [Technologies Used](#Technologies-used)
* [Requirements](#Requirements)
* [Testing](#Testing)
    - [*HTML*](#HTML)
    - [*CSS*](#CSS)
    - [*JavaScript*](#JavaScript)
    - [*LightHouse Report*](#lighthouse-report)
    - [*Manual testing*](#manual-gameplay-test-to-ensure-funcunality-and-quality)
* [Deployment](#Deployment)
* [Installation Instructions](#installation-instructions)
* [Support Information](#support-information)
* [Media and Credits/Acknowledgements](#media-and-credits--acknowledgements)
    - [*CODE*](#code)
    - [*IMAGES*](#images)
    - [*KLINGON TRANSLATION*](#klingon-translated-welcome-text--game-description)
    - [*RECOGNITION*](#special-thanks-and-recognition-to)
* [Gratitude](#gratitude)
* [License](#license-information)
* [Conclusion](#conclusion)    


## Features
- Gameplay and Information: This section provides players with essential information on how to start and play the game. By clicking the "START GAME" button on the landing page, players can choose their hand shape from the available options: Rock, Paper, Scissors, Spock, and Lizard. 

- Game Rules: The game rules are explained, highlighting the interactions between different hand shapes. Each choice has specific outcomes, creating a dynamic and entertaining gaming experience. The rules include interactions such as Rock crushing Scissors and Lizard, Paper covering Rock and disproving Spock, Scissors cutting Paper and decapitating Lizard, Spock smashing Scissors and vaporizing Rock, and Lizard poisoning Spock and eating Paper. ![Game Description Mockup](/assets/images/indexmockup.JPG)

- Klingon Translation: Explore the rich Klingon culture by translating the game instructions into the Klingon language. This feature adds an extra layer of authenticity and immersion for players who want to experience the game in the context of Qo'noS. ![Klingon Translation Mockup](/assets/images/klingonmockup.JPG)

- Scoring:  The scoring feature keeps track of each player's score throughout the game. The scoreboard displays both player and computer scores, making it easy for players to monitor their progress. The first player to reach 3 points wins the round. ![Ingame Score Counter](/assets/images/scoreboardbefore5mocking.JPG)

- Game Result: After playing 5 rounds, the game concludes with a detailed result. Players can discover the overall winner and relive the exciting moments of each round. This feature adds a sense of closure and competition to the gaming experience.![End Game Score Result ](/assets/images/endgamescoreboardmockup.JPG)

## Future features 

 #### Moving forward, I aim to make following adjustments:
- Transition from using onclick functions in game.html to eventListeners in script.js.
- Implement media queries to ensure a seamless mobile-first experience, particularly addressing compability issues within the 280px - 425px range. This is crucial, as the current flex properties may encounter challenges on a variety of devices within this range.
- Incorporate sound effects triggered upon activation of the onclick events to provide immersive user experience during gameplay.
- Re-structure the buttons for smaller devices, adding JS function to dynamically remove certain elements, optimizing the layout for smaller devices.
- Reviewing the color-scheme to optimize the best user experience and meet the requirements for a higher LightHouse score.


## Technologies Used
- HTML5 
  - *The structure of the website was developed using HTML5 as the main language.*
- CSS3
  - *The website was styled using CSS.*
- JavaScript
  - *The game play logic was created using JavaScript and some other HTML attributes as popups.*
- Visual Studio Code 
  - *Mainly used VSC locally with extension for live preview when setting up and testing my way going forward with the project.*
- GitHub
  - *Source code is hosted at GitHub and deployed through Git Pages.*
- GitPod 
  - *Source for codespace(IDE) with commit and push when developing the website.*

## Requirements
- Web Browser (Recommended: Chrome, Firefox, Safari)

## Testing
#### - *HTML* 
* Validated through the official [W3C Validator](https://validator.w3.org/)
  - ![W3C HTML RESULT INDEX.HTML](/assets/images/w3chtmlindex.JPG)
  - ![W3C HTML RESULT KLINGON.HTML](/assets/images/w3chtmlklingon.JPG)
  - ![W3C HTML RESULT GAME.HTML](/assets/images/w3chtmlgame.JPG)
     ##### *As presented all the documents completed the check without any errors or warnings.*

#### - *CSS* 
* Validated through the official W3C CSS Validator without any errors or warnings - Click W3C Image for results. [![Result Link Click W3C](http://jigsaw.w3.org/css-validator/images/vcss)](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmilosson.github.io%2FKlingonTribute%2Findex.html) 

#### - *JAVASCRIPT*
* No errors were found when passing through [JSHint Validator](https://jshint.com/)
- Two warnings regarding unused variables play and restartGame but these functions are called on with onclick function in game.html.

![JavaScript Validator Result](/assets/images/JSHintValidator.JPG)

#### Lighthouse Report
 * Lighthouse report generated an overall awesome result, with accessibility scoring the lowest at 89, The reason for this is the insufficient contrast between the scoreboard, buttons, etc., and the background-color.
![Lighthouse Report](/assets/images/Lighthousereport.JPG)

### Manual gameplay test to ensure functionality and quality.

     Rock loses to Paper
![Rock beaten by paper](/assets/images/testrockbeatpaper.JPG)

     Rock beats Scissors
![Rock beats Scissors](/assets/images/testrockbeatscissors.JPG)

     Paper disapproves Spock
![Paper disapproves Spock](/assets/images/testpaperdisspock.JPG)     

     Paper resulted in Tie
![Paper resulted in Tie](/assets/images/testpaperresulttie.JPG)     

## Deployment
#### The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab 
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

## Installation Instructions
    1. Clone the repository: 
    ```bash
    git clone https://milosson.github.io/KlingonTribute/
    ```
    2. Open the project in your preffered code editor.
    3. Launch the website by opening the 'index.html' file in a web browser.

 ## The live link can be found here - [LIVE LINK](<https://milosson.github.io/KlingonTribute/index.html>)

## Support Information

For any issues or inquiries, please contact [ milorazzaz@protonmail.com ] 🖖

## Contribution Guidelines

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make change and commit them.
4. Push your changes fo your fork.
5. Create a pull request.

## Media and Credits / Acknowledgements

This project was inspired originally from the TV series - Big Bang Theory, which I believe was the first edition of this game ever presented. 

When it was time to start planning my second project for school including HTML, CSS and JavaScript the choice to make this game was just an easy call. (Also one of the suggestions from school as a first project in JavaScript).

With the help and inspiration of others throughout Stackoverflow and other sources such as YouTube and CodeInstitutes (my current school), I developed my own way of creating this beloved game with a touch of humor included as i translated the game description into Klingon. I feel like I've created my own version as I wanted it.

### Code
 - Object mapping and general code was inspired and used from [Coding Therapy](https://www.youtube.com/watch?v=wT1pwM7hRtQ&ab_channel=CodingTherapy)
 - Inspired and code snippets used from [Web Dev Simplified](https://www.youtube.com/watch?v=1yS-JV4fWqY&ab_channel=WebDevSimplified)
 - Inspiration and guideline [Hackernoon](https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy) 
 - Inspiration and guideline [Sakil Mahmud @ medium.com ](https://medium.com/@sakilmahmud543/build-sheldons-chaotic-rock-paper-scissors-lizard-spock-with-nodejs-923d6cb9f5dc)

### Images 
 - [Pinterest](https://www.pinterest.se/pin/40532465370761714/) Gameboard Image
 - [Pinterest](https://www.pinterest.se/pin/240450067597702718/) Welcome Image 

 ### Klingon translated welcome text / game description
 - [Translater](https://www.translator.eu/english/klingon/translation/) Used various translation websites to translate the welcome text. Conclusively, results varied across different platforms, and when reverting the translated text back to its original English form, the outcome were distinctly different. 
 Let's just hope the inhabitants of Qo'noS won't take offense and interpret this genuine attempt to earn universal respect and understanding! 🖖


### Special thanks and recognition to: 
 * My awesome mentor **Gareth McGirr** [GitHub](https://github.com/Gareth-McGirr), His project and the way I choose to create i.e object map was inspired through his project mainly through his source [TheSoftwareDude](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript). This was combined all together with above mentioned sources.

### Gratitude
### *A heartfelt shout-out to my mentor, [Gareth McGirr](https://github.com/Gareth-McGirr), and my school, [CodeInsitute](https://codeinstitute.net/), for providig me with the knowledge to bring this project to life. Their tutorials have been a key factor in shaping this project, and I am grateful for their support.*


## License Information

This Klingon Tribute game is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to explore, modify, and share the game as long as you adhere to the terms of the MIT License or, if you are a member of the Klingon family 🖖👽

## Conclusion

Thank you for visiting Klingon Tribute - Rock Paper Scissors Spock Lizard, a classic game with a twitst to it. 
# Vulcan Salute 🖖👽