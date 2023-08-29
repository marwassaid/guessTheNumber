let randomNumber=Math.floor(Math.random( )*100)+1; //from 1 - 100
const guessField =document.getElementById("num")
const guessBtn=document.getElementById("guess-btn")
const guesses=document.getElementById("prev-guesses")
const lastResult=document.getElementById("lastResult")
const lowOrHi=document.getElementById("lowOrHi")
let guessCount = 1;
let resetButton;

guessBtn.onclick=() =>{
    checkGuess()
}


function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "purple";
      lowOrHi.textContent = "";
      setGameOver();
    } 
    else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHi.textContent = "";
      setGameOver();
    } 
    else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }  
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }

  function setGameOver() {
    guessField.disabled = true;
    guessBtn.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.style.color="purple"
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
  }

  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }  
    resetButton.parentNode.removeChild(resetButton);  
    guessField.disabled = false;
    guessBtn.disabled = false;
    guessField.value = "";
    guessField.focus();  
    lastResult.style.backgroundColor = ""; 
  }