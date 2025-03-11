let tools = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomindex = Math.floor(Math.random() * 3);
  let tool = tools[randomindex];
  console.log(`Computer chose ${tool}`);
  return tool;
}

function getHumanChoice() {
  let tool = prompt("Rock, Paper Or Scissors");
  console.log(`You chose ${tool}`);
  return tool;
}

function playGame(humanSelection, computerSelection) {
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore = humanScore + 1;
      console.log(`Your Score : ${humanScore}`);
      console.log(`Computer Score : ${computerScore}`);
      console.log(`You win!, ${humanChoice} beats ${computerChoice}. `);
    } else {
      computerScore = computerScore + 1;
      console.log(`Your Score : ${humanScore}`);
      console.log(`Computer Score : ${computerScore}`);
      console.log("Computer wins!");
    }
  }
  playRound(humanSelection, computerSelection);
}

for (let i = 1; i <= 5; i++) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playGame(humanSelection, computerSelection);
}
