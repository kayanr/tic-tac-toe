let currentPlayer = "O";
let numberOfPlayers = 2;
let won = true;
//alert(currentPlayer);

function place(box) {
  if (box.innerText != "") return;
  box.innerText = currentPlayer;
  if (currentPlayer == "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
}
