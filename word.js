const fs = require('./letter.js'); 

function Word(Letter) {
  this.new = []; 
  this.word = function() {
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.new.push(new Letter()); 
  }
  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
}