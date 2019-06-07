/*
GAME FUNCTION:
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const gameWrapper = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),      
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
gameWrapper.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function(){
    const guess = parseInt(guessInput.value);
    console.log(guess)
    guessInput.value = '';
    
    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    } else if(guess === winningNum) {
        // Game over - won
        msg = `${winningNum} is correct, YOU WIN!`;
        gameOver(true,msg)
    } else {
        // Wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            // Game over - lost
            msg = `Game Over, you lost. The correct number was ${winningNum}.`;
            gameOver(false,msg)
        } else {
            // Game continues - answer wrong
            color = 'red';
            
            msg = `${guess} is not correct, ${guessesLeft} guesses left.`;
            setMessage(msg, color);
        }
    }
})

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input 
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    message.style.color = color;
    // Set message
    setMessage(msg, color);

    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

// Get Random Number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}