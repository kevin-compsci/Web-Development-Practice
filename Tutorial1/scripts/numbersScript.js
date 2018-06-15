//variables and local declarations

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

//functions
function checkGuess() {
  var userGuess = Number(guessField.value);
  //???
  if(guessCount == 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ' //convert to string for output

  //correct guess
  if(userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You guessed correctly!'
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textcontent = '';
    setGameOver();
  } //gameover
  else if(guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } //try again
  else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';

    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Too low!';
    }
    else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Too high!';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}