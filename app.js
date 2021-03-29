let currentPlayer = "O";
let numberOfPlayers = 2;
let won = true;
//alert(currentPlayer);

function place(box) {
  if (box.innerText != "") return;
  box.innerText = currentPlayer;
  
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard();
  }

function checkGameBoard() {
    let first = document.getElementById("0_0").innerText;
    let second = document.getElementById("1_0").innerText;
    let third = document.getElementById("2_0").innerText;

    if (first == second && first == third) {
        alert("Winner!");
    }
  }
