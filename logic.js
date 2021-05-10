let players = ['x', 'o'];
let activePlayer;
let boardArea;

function startGame() {
  boardArea = [
  ["", "", ""], 
  ["", "", ""], 
  ["", "", ""]
  ];
  activePlayer = 0;
  renderBoard(boardArea);
}

function click(row, column) {
  boardArea[row][column] = players[activePlayer];
  renderBoard(boardArea);
  checkWinner(row, column, boardArea);
  changePlayer();
}

function changePlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function checkWinner(row, column, boardArea) {
  let rock = boardArea[row][column];
  let rowWin = true;
  let colWin = true;
  let diagonalWin = true;
  let reverseDiagonalWin = true;

  for (let i = 0; i < boardArea.length; i++) {
    if (boardArea[row][i] != rock) {
      rowWin = false;
    }
    if (boardArea[i][column] != rock) {
      colWin = false;
    }
    if (boardArea[i][i] != rock) {
      diagonalWin = false;
    }
    if (boardArea[i][boardArea.length - (i+1)] != rock) {
      reverseDiagonalWin = false;
    }
  }

  if (rowWin || colWin || diagonalWin || reverseDiagonalWin) {
    showWinner(players[activePlayer]);
  }
}