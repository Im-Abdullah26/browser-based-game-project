
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
// ---------------------------variables--------------------------------------
let firstCard = null
let secondCard = null
let matches = 0
// -------------------------shuffle loop------------------------------

for (let i = 0; i < 16; i++) { 

    let random = Math.floor(Math.random() * 16)

    let temp = emojis[i]

    emojis[i] = emojis[random]
    
    emojis[random] = temp
}

console.log(emojis)

// ---------------------------------------------------------------

const message = document.getElementById("message")

const gameBoard = document.getElementById("game-board")



// ------------------------Create the cards-----------------------


for (let i = 0; i < 16; i++) {

    const card = document.createElement("div")

    card.className = "card"

    card.id= i
    
    gameBoard.appendChild(card)

//-------------------------------------------------------------- 


card.addEventListener("click", function(){

    card.style.backgroundColor= 'yellow'   
    card.textContent = emojis[i]

    if (firstCard === null) { //If it's still null then this must be the player's first click

    firstCard = card;

} else {

    secondCard = card
    
    if (firstCard.textContent === secondCard.textContent && firstCard.id !== secondCard.id) {

    
    console.log("They match")

    matches = matches + 1

    if (matches === 8) {

    message.textContent = "🎉 You Win!"
    console.log("🎉 You Win!")

}

    firstCard = null
    secondCard = null


} else {

    console.log("They don't match")

setTimeout(function () {

    firstCard.textContent =""
    secondCard.textContent =""
    firstCard.style.backgroundColor = "royalblue"
    secondCard.style.backgroundColor = "royalblue"

    firstCard = null
    secondCard = null

}, 600)

    
}
    
}
       
    
})
}


// ----------------------------Timer----------------------------------


let time = 30

const runTimer = setInterval(function(){
       
    time = time - 1
       
        // console.log('time left: ', time)
    }, 1000)

setTimeout(function() {

    clearInterval(runTimer)
    console.log('Time is Up')
}, 30000)

