let currentPlayer = "orange";
let won = false;

function place(box) {
  if (box.style.backgroundColor != "" || won) return;
  document.getElementById(
    "currentPlayer"
  ).innerHTML = ` <span style="color:${currentPlayer}"> 
    ${currentPlayer}'s turn </span>`;
  box.style.backgroundColor = currentPlayer;

  checkGameBoard();
  //next player
  currentPlayer == "orange"
    ? (currentPlayer = "blue")
    : (currentPlayer = "orange");
}

function checkGameBoard() {
  for (let i = 0; i <= 2; i++) {
    //check the columns on the board for a winner
    let colFirst = document.getElementById(i + "_0").style.backgroundColor;
    let colSecond = document.getElementById(i + "_1").style.backgroundColor;
    let colThird = document.getElementById(i + "_2").style.backgroundColor;
    checkWinner(colFirst, colSecond, colThird);
    //check the rows on the board for a winner
    let rowFirst = document.getElementById("0_" + i).style.backgroundColor;
    let rowSecond = document.getElementById("1_" + i).style.backgroundColor;
    let rowThird = document.getElementById("2_" + i).style.backgroundColor;
    checkWinner(rowFirst, rowSecond, rowThird);
  }

  //check first diagonal is a winner
  let firstD1 = document.getElementById("0_0").style.backgroundColor;
  let secondD1 = document.getElementById("1_1").style.backgroundColor;
  let thirdD1 = document.getElementById("2_2").style.backgroundColor;
  checkWinner(firstD1, secondD1, thirdD1);

  //check is second diagonal is a winner
  let firstD2 = document.getElementById("0_2").style.backgroundColor;
  let secondD2 = document.getElementById("1_1").style.backgroundColor;
  let thirdD2 = document.getElementById("2_0").style.backgroundColor;
  checkWinner(firstD2, secondD2, thirdD2);
}

//check winner function
function checkWinner(first, second, third) {
  if (first != "" && first == second && first == third) {
    won = true;
    alert(`${currentPlayer} is the Winner!`);
  }
}
