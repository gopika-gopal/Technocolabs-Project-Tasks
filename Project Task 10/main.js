

//function definition.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
        return userInput;
    }else if(userInput == 'bomb'){
        return userInput;
    }
    else {
        return 'Error';
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    // return randomNumber;

    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else if (randomNumber == 2) {
        return 'scissor';
    } else {
        return 'Error';
    }
}

const determineWinner = (userChoice, computerChoice) => {

    // tie condition
    if (userChoice == computerChoice) {
        return 'The game is a tie';
    }

    // first condition
    if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            return 'computer won';
        } else {
            return 'user won';
        }
    }

    // second condition
    if (userChoice == 'paper') {
        if (computerChoice == 'rock') {
            return 'user won';
        } else {
            return 'computer won';
        }
    }

    // third condition
    if (userChoice == 'scissor') {
        if (computerChoice == 'paper') {
            return 'user won';
        } else {
            return 'computer won';
        }
    }

    // cheat code
    if (userChoice == 'bomb') {
        return 'user won';
    }
}

// function getComputerChoice() {
//     var randomNumber = Math.floor(Math.random() * 3);
// }
//function definition.
// function getUserChoice(userInput) {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
//         return userInput;
//     }else{
//        return 'Error';
//     }
// }


// function calling/invoke
// console.log(getUserChoice('rock'));
// console.log(getComputerChoice());


const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('userChoice: ', userChoice, 'computerChoice: ', computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

console.log(playGame());

