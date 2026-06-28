const gameBoard = document.getElementById("game-board")

// ---------------------------------------------------

const card1 = document.createElement("div")

card1.className = "card"

gameBoard.appendChild(card1)

// ------------------------------

const card2 = document.createElement("div")

card2.className = "card"

gameBoard.appendChild(card2)

// ---------------------------------

for (let i = 1; i <= 20; i++) {
    console.log("🍎");
}