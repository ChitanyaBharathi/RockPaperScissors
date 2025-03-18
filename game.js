let tools = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Create elements for buttons
let body = document.querySelector("body");

let buttons = document.createElement("div");

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");

// Set button text
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

// Add buttons to the body
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

body.appendChild(buttons);

// Event listeners for buttons
buttons.addEventListener("click", (e) => {
  let target = e.target;
  if (target.tagName.toLowerCase() === "button") {
    let playerSelection = target.textContent.toLowerCase();
    playGame(playerSelection, getComputerChoice());
  }
});

let results = document.createElement("div");
body.appendChild(results);

//functions
function getComputerChoice() {
  let randomindex = Math.floor(Math.random() * 3);
  let tool = tools[randomindex];
  console.log(`Computer chose ${tool}`);
  return tool;
}

function playGame(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice === computerChoice) {
    results.innerHTML = `It's a tie, Both Chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore = humanScore + 1;
    results.innerHTML = `You win!, ${humanChoice} beats ${computerChoice}. <br>
                     Your Score: ${humanScore} <br> 
                     Computer Score: ${computerScore}`;
  } else {
    computerScore = computerScore + 1;
    results.innerHTML = `Computer wins!, ${computerChoice} beats ${humanChoice}. <br>
                     Your Score: ${humanScore} <br> 
                     Computer Score: ${computerScore}`;
  }
}
