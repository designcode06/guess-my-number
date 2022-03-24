"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkGuess = function () {
  const guess = Number(document.querySelector(".guess").value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage("⛔️ No number!");

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".check").addEventListener("click", checkGuess());

document.querySelector(".guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
