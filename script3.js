const resultDisplay = document.querySelector('.result');
const choicesDisplay = document.querySelector('.choices');
const userScoreDisplay = document.createElement('h4');
const computerScoreDisplay = document.createElement('h4');
const choices = ['rock', 'paper', 'scissors'];
const scoreBoard = document.getElementById("scoreBoard");
scoreBoard.append(userScoreDisplay, computerScoreDisplay);

let userScore = 0;
let computerScore = 0;

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)]);
    userScoreDisplay.innerHTML = "User score: " + userScore;
    computerScoreDisplay.innerHTML = "Computer score: " + computerScore;
}

choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    choicesDisplay.appendChild(button);
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.textContent = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', YOU WIN!'
            userScore += 1
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.textContent = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', YOU LOSE!'
            computerScore += 1
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.textContent = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', it\'s a tie..'
            break
    }
    if (userScore >= 5) {
        userScoreDisplay.innerHTML = 'User score: 5'
        resultDisplay.innerHTML = "You win! Reload the page to play again!"
        disableButtons()
    }
    if (computerScore >= 5) {
        computerScoreDisplay.innerHTML = 'Computer score: 5'
        resultDisplay.innerHTML = "You lost, game over! Reload the page to play again!" 
        disableButtons()
    }
}

//this version is clean javascript but it'll be the hardest to add cool CSS to, it is best to use option 2.