
const emojis = [
    "🚀","🚀",
    "🪐","🪐",
    "🌍","🌍",
    "🌙","🌙",
    "⭐","⭐",
    "☄️","☄️",
    "🛰️","🛰️",
    "👨‍🚀","👨‍🚀"
]
// ---------------------------variables--------------------------------------
let firstCard = null
let secondCard = null
let matches = 0
let canClick = true
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

const restartButton = document.getElementById("restart-button")

const timer = document.getElementById("timer")

const popup = document.getElementById("popup")

const popupTitle = document.getElementById("popup-title")

const popupButton = document.getElementById("popup-button")

// ------------------------Create the cards-----------------------


for (let i = 0; i < 16; i++) {

    const card = document.createElement("div")

    card.className = "card"

    card.id= i
    
    gameBoard.appendChild(card)

//-------------------------------------------------------------- 


card.addEventListener("click", function(){

if (canClick === false) {
    return
}

    card.style.backgroundColor= 'darkblue'   
    card.textContent = emojis[i]

    if (firstCard === null) {

    firstCard = card;

} else {
    if (firstCard === card) {
    return
    }
    secondCard = card
    
    if (firstCard.textContent === secondCard.textContent && firstCard.id !== secondCard.id) {

    
    console.log("They match")

    matches = matches + 1

    if (matches === 8) {

    message.textContent = "🚀 Mission Complete!"
    popup.style.display = "flex"
    popupTitle.textContent = "🚀 Mission Complete!"
  
    clearInterval(runTimer)

}

    firstCard = null
    secondCard = null


} else {

    console.log("They don't match")

    canClick = false

setTimeout(function () {

    firstCard.textContent =""
    secondCard.textContent =""
    firstCard.style.backgroundColor = "#a5b1c1"
    secondCard.style.backgroundColor = "#a5b1c1"

    firstCard = null
    secondCard = null

    canClick = true

}, 600)

    
}
    
}
       
    
})
}



// -------------------------restart-----------------------------------

restartButton.addEventListener("click", function () {

    popup.style.display = "none"

    console.log("Restart button clicked!")

    message.textContent = ""

 matches = 0
firstCard = null
secondCard = null
canClick = true
 


for (let i = 0; i < 16; i++) {

        let random = Math.floor(Math.random() * 16)

        let temp = emojis[i]
        emojis[i] = emojis[random]
        emojis[random] = temp
    }
const cards = document.querySelectorAll(".card")

    for (let i = 0; i < 16; i++) {

        cards[i].textContent = ""
        cards[i].style.backgroundColor = ""

    }

    startTimer();
})
// ----------------------------Timer----------------------------------


let time = 90;
let runTimer;

function startTimer() {

    clearInterval(runTimer);

    time = 90;
    timer.textContent = time;

runTimer = setInterval(function () {

    time= time - 1

 timer.textContent = time

if (time <= 0) {

    time = 0
    timer.textContent = time

    clearInterval(runTimer)

    message.textContent = "⏰ Time's Up!"

    popup.style.display = "flex"
    popupTitle.textContent = "⏰ Time's Up!"

    canClick = false

   }

    }, 1000)

}

startTimer();


// -----------------------------------------------------------

popupButton.addEventListener("click", function () {

    popup.style.display = "none"
    
    restartButton.click()

})