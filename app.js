
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
    card.id= i
    
    gameBoard.appendChild(card)
    
    card.addEventListener( "click", function(event){
        card.style.backgroundColor= 'yellow'
        // gets the card's id
        console.log(event.target.id)
        // get the card element
        console.log(event.target)
        event.target.textContent = emojis[event.target.id]
        // card.textContent = emojis[i]
    })


}



// for (let i = 0; i < 16; i++) { //suffle loop//

//     let random = Math.floor(Math.random() * 16)

//     let temp = emojis[i]

//     emojis[i] = emojis[random]
    
//     emojis[random] = temp


// }


console.log(emojis)

let time = 30

const runTimer = setInterval(function(){
       
    time = time - 1
       
        // console.log('time left: ', time)
    }, 1000)

setTimeout(function() {

    clearInterval(runTimer)
    console.log('Time is Up')
}, 30000)



