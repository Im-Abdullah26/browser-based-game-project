
const emojis = [
    "😀", "😀",
    "😎", "😎",
    "🍎", "🍎",
    "⭐", "⭐",
    "🐶", "🐶",
    "🚗", "🚗",
    "⚽", "⚽",
    "🍕", "🍕"
]


const gameBoard = document.getElementById("game-board")

for (let i = 0; i < 16; i++) {

    const card = document.createElement("div")

    card.className = "card"

    card.textContent = emojis[i]

    gameBoard.appendChild(card)


}



for (let i = 0; i < 16; i++) { //suffle loop//

    let randomIndex = Math.floor(Math.random() * emojis.length);

    let temp = emojis[i]

    emojis[i] = emojis[randomIndex]
    
    emojis[randomIndex] = temp

}
console.log(emojis)