const X_CLASS = "x";
const O_CLASS = "o";
const WINNING_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let cells = document.querySelectorAll(".cell");
let resultElement = document.querySelector(".result");

let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? O_CLASS : X_CLASS;
  placeMarker(cell, currentClass);

  // Cherck for win
  if (checkWin(currentClass)) {
    resultElement.innerText = `${circleTurn ? "O's" : "X's"} Winner`;
  } else if (checkDraw()) {
    resultElement.innerText = "Draw";
  }

  switchTurn();
}

function placeMarker(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurn() {
  circleTurn = !circleTurn;
}

function checkWin(currentClass) {
  return WINNING_CONDITIONS.some((condition) => {
    return condition.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function checkDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}
