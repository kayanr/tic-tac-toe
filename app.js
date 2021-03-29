let currentPlayer = "O";
let numberOfPlayers = 2;
let won = false;
//alert(currentPlayer);

function place(box) {
  if (box.innerText != "" || won) return;
  box.innerText = currentPlayer;
  
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard();
  }

function checkGameBoard() {
  //check the rows on the board
  for (let i = 0; i <= 2; 1++) {
    let first = document.getElementById("0_" + i).innerText;
    let second = document.getElementById("1_" + i).innerText;
    let third = document.getElementById("2_" + i).innerText;
    if (first == "") continue;
    if (first == second && first == third) {
      alert("Winner!");
    }
  }

  //check the columns on the board
  for (let i = 0; i <= 2; 1++) {
    let first = document.getElementById(i + "_0").innerText;
    let second = document.getElementById(i + "_1").innerText;
    let third = document.getElementById(i + "_2").innerText;
    if (first == "") continue;
    if (first == second && first == third) {
      alert("Winner!");
    }
  }

  //check first diagonal
  let firstD1 = document.getElementById("0_0").innerText;
  let secondD1 = document.getElementById("1_1").innerText;
  let thirdD1 = document.getElementById("2_2").innerText;
  if (firstD1 != "" && firstD1 == secondD1 && firstD1 == thirdD1) {
    alert("Winner!");
  }

  //check second diagonal
  let firstD2 = document.getElementById("0_2").innerText;
  let secondD2 = document.getElementById("1_1").innerText;
  let thirdD2 = document.getElementById("2_0").innerText;
  if (firstD2 != "" && firstD2 == secondD2 && firstD2 == thirdD2) {
    alert("Winner!");
  }
}

function checkWinner(first, second, third) {
 if (first != "" && first == second && first == third) {
     alert("Winner!");
     won = true;
 }
}
