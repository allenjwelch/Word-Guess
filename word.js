const Letter = require('./letter.js'); 

function Word(word) {
  this.wordArr = word.split(''); 
  // this.word = []; 
  // this.word.push(new Letter(word)); 
  this.letterCount = this.wordArr.length; 
  // this.spacers = console.log('__ ' * 2); 
  
  // wordArr.forEach(letter => { })

  this.letter = function() {
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.new.push(new Letter()); 
  }
  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
}

// const banana = new Word('banana'); 

// console.log(banana.wordArr); 
// banana.addLetters(); 

// console.log(banana.new); 

module.exports = Word; 