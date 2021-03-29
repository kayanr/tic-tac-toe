let currentPlayer = "O";
let won = false;
//alert(currentPlayer);

function place(box) {
  if (box.innerText != "" || won) return;

  box.innerText = currentPlayer;

  currentPlayer == "O" ? (currentPlayer = "X") : (currentPlayer = "O");
  checkGameBoard();
}

function checkGameBoard() {
  for (let i = 0; i <= 2; i++) {
    //check the columns on the board
    let colFirst = document.getElementById(i + "_0").innerText;
    let colSecond = document.getElementById(i + "_1").innerText;
    let colThird = document.getElementById(i + "_2").innerText;
    checkWinner(colFirst, colSecond, colThird);
    //check the rows on the board
    let rowFirst = document.getElementById("0_" + i).innerText;
    let rowSecond = document.getElementById("1_" + i).innerText;
    let rowThird = document.getElementById("2_" + i).innerText;
    checkWinner(rowFirst, rowSecond, rowThird);
  }

  //check first diagonal
  let firstD1 = document.getElementById("0_0").innerText;
  let secondD1 = document.getElementById("1_1").innerText;
  let thirdD1 = document.getElementById("2_2").innerText;
  checkWinner(firstD1, secondD1, thirdD1);

  //check second diagonal
  let firstD2 = document.getElementById("0_2").innerText;
  let secondD2 = document.getElementById("1_1").innerText;
  let thirdD2 = document.getElementById("2_0").innerText;
  checkWinner(firstD2, secondD2, thirdD2);
}

function checkWinner(first, second, third) {
  if (first != "" && first == second && first == third) {
    alert("Winner!");
    won = true;
  }
}
