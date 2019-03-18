
var playerOne = document.querySelector("#player1").value;
var playerTwo = document.querySelector("#player2").value;
function submit() {
  document.querySelector("#player1").innerHTML = "";
  document.querySelector("#player2").innerHTML = "";
}

function gameBoard() {
  const gameboard = document.querySelector('gameboard')
  drawGame();
  getId();
}

let ponearray = [];
let ptwoarray = [];

function drawGame() {
  for(i = 0; i < 9; i++) {
    var gridCell = document.createElement('div')
    gridCell.className = "griditem"
    gridCell.id = i

    gameboard.appendChild(gridCell)
  }
}
var state;
function getId() {
  for (i=0;i<9;i++) {
    let gridCell = document.getElementById(i);
    gridCell.addEventListener('click', () => {
      drawXO(gridCell);
      checkForWin()
    });
  }
}

function drawXO(gridCell) {
  if (state == undefined) {
    state = 0;
  }
  if (state == 0) {
    if (gridCell.innerHTML == "") {
      gridCell.innerHTML = "X";
      ponearray.push(gridCell.id)
      state = 1;
    }
  } else if (state == 1) {
    if (gridCell.innerHTML == "") {
      gridCell.innerHTML = "O";
      ptwoarray.push(gridCell.id)
      state = 0;
    }
  }
}

var para = document.querySelector('#message')

function restart() {
  document.getElementById("gameboard").innerHTML = "";
  gameBoard();
  state = 0;
  ponearray = [];
  ptwoarray = [];
  para.innerHTML = ""
}

function checkForWin() {
  let winningCombo = [["0","1","2"], ["3","4","5"], ['6','7','8'], ['0','3','6'], ['0','4','8'], ['2','4','6'], ['1','4','7'], ['2','5','8']];
  for (var i = 0; i < winningCombo.length; i++) {
    if (arrayContainsArray(ponearray,winningCombo[i]) == true) {
      if (document.getElementById('player1').value == "") {
        para.innerHTML = "Player 1 wins!";
        state = 2
      } else {
      para.innerHTML = `${document.getElementById('player1').value} wins!`;
      state = 2
    }
    }
    if (arrayContainsArray(ptwoarray,winningCombo[i]) == true) {
      if (document.getElementById('player2').value == "") {
        para.innerHTML = "Player 2 wins!";
        state = 2
      } else {
      para.innerHTML = `${document.getElementById('player2').value} wins!`;
      state = 2
    }
    }
  }
}

function arrayContainsArray (superset, subset) {
  if (0 === subset.length) {
    return false;
  }
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}

gameBoard()
