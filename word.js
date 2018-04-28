const Letter = require('./letter.js'); 

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


function Word(word) {
  //   * An array of `new` Letter objects representing the letters of the underlying word

  this.word = word.split(''); 
  this.wordArr = []; 
  // this.word.push(new Letter(word)); 
  this.letterCount = this.wordArr.length; 
  // this.spacers = console.log('__ ' * 2); 
  
  this.word.forEach(letter => { 
    let newLtr = new Letter(letter); 
    // console.log(test); 
    this.wordArr.push(newLtr); 
  })

  // console.log(this.wordArr[0].isGuessed); /// --->> Getting closer!!!!


  this.letter = function() {
    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    console.log(``); 
  }
  // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
}






module.exports = Word; 