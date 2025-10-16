let gameResultValue = document.getElementById("gameResult");
let userInputValue = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function onCheck() {
    let guessNUmber = parseInt(userInputValue.value);
    if (guessNUmber > randomNumber) {
        gameResultValue.textContent = "Too High! Try Again.";
        gameResultValue.style.backgroundColor = "#1e217c";
    }
    else if (guessNUmber < randomNumber) {
        gameResultValue.textContent = "Too Low! Try Again.";
        gameResultValue.style.backgroundColor = "#1e217c";
    }
    else if (guessNUmber === randomNumber){
        gameResultValue.textContent = "Congratulations! You got it right.";
        gameResultValue.style.backgroundColor = "green";   
    }
    else{
        gameResultValue.textContent = "Please provide a valid input.";
        gameResultValue.style.backgroundColor = "red";    
    }
}