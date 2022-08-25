const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)
//h1 tags not showing in console :,-(
const choices = ['rock', 'paper', 'scissors']
let userChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}

//add the buttons. not sure i understand what is going on here...
//this should put buttons on my HTML but it didnt...
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] //can be delete f you want to use e.target.innerHTML in handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

