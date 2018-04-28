const Word = require('./word.js'); 
const inquirer = require('inquirer'); 
let remainingGuesses = 5; 
let userGuess; 
let gameWord; 

const wordList = ['donkey', 'cat', 'rhino', 'bird', 'dog', 'hamster']

gamePlay(); 

// Randomly selects a word and uses the `Word` constructor to store it


// Prompts the user for each guess and keeps track of the user's remaining guesses


function gamePlay() {
  newWord(); 
  userInput(); 
}

function newWord() {
  let rand = Math.floor(Math.random() * 6); 
  // gameWord = wordList[rand]; 
  gameWord = new Word(wordList[rand]);
  // return gameWord; 
  console.log(gameWord.word); 
  // console.log(gameWord.wordArr); 
  // console.log(Letter.checked); 
    // console.log(this.wordArr[0].isGuessed); /// --->> Getting closer!!!!


}

function userInput() {
  if (remainingGuesses > 0 ) {
    inquirer.prompt([
      {
        name: 'userGuess', 
        message: 'Guess a letter', 
      }
    ]).then(input => {
      userGuess = input.userGuess; 
      let wordLetters = gameWord.wordArr; 
      wordLetters.forEach(letter => letter.checked(userGuess));
        // console.log(gameWord.wordArr); 

      userInput(); 
    });
  }
}

// **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses