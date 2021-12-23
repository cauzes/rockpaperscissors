hands = ["rock", "paper", "scissor"];

btn = document.querySelector(".button");
rock = document.querySelector("#rock");
paper = document.querySelector("#paper");
scissor = document.querySelector("#scissor");
winOrLose = document.querySelector(".win-or-lose");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  randomHand = hands[Math.floor(Math.random() * hands.length)];
  if (rock.checked) {
    if (rock.value === randomHand) {
      winOrLose.innerHTML =
        winOrLose.innerHTML = `<img src="./rock-game.png" alt=""><br>You tied`;
    } else if (randomHand === "paper") {
      winOrLose.innerHTML = `<img src="./paper.png" alt=""><br> You lose!`;
    } else {
      winOrLose.innerHTML = `<img src="./scissors.png" alt=""><br>You win!`;
    }
  } else if (paper.checked) {
    if (paper.value === randomHand) {
      winOrLose.innerHTML = `<img src="./paper.png" alt=""><br> You tied`;
    } else if (randomHand === "scissor") {
      winOrLose.innerHTML = `<img src="./scissors.png" alt=""><br>You lose!`;
    } else {
      winOrLose.innerHTML = `<img src="./rock-game.png" alt=""><br>You win!`;
    }
  } else if (scissor.checked) {
    if (scissor.value === randomHand) {
      winOrLose.innerHTML = `<img src="./scissors.png" alt=""><br>You tied`;
    } else if (randomHand === "rock") {
      winOrLose.innerHTML =
        winOrLose.innerHTML = `<img src="./rock-game.png" alt=""><br>You lose!`;
    } else {
      winOrLose.innerHTML = `<img src="./paper.png" alt=""><br> You win!`;
    }
  }
});
