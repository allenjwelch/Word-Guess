function Letter(a) {
  this.letter = a; 
  this.guessed = true;  
  this.guess = function() {
    if (this.guessed) {
      console.log('underlying character'); 
    } else if (!this.guessed) {
      console.log('_'); 
    }
  }
  this.checked = function(char) {
    if (char === this.letter) {
      console.log('Checked!'); 
      this.guessed = true; 
    } else {
      console.log('Not matched!'); 
      this.guessed = false; 
    }
  }
}; 

// let e = new Letter('e'); 
// console.log(e); 
// e.checked('f'); 

module.exports = Letter; 