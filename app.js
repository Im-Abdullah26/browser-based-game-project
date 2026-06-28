const gameBoard = document.getElementById("game-board")

for (let i = 1; i <= 16; i++) {
    
    const card = document.createElement("div")

    card.className = "card"
    
    gameBoard.appendChild(card)
}