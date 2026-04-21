let firstcard= 7
let secondcard=10

let sum = firstcard + secondcard
let hasblackjack= true
let isAlive= true
let message = ""

function startgame() {

    if (sum <= 20){
    message = "do you want to draw a new card?"
}

else if ( sum === 21){
    message = "you have got blackjack"
    hasblackjack = true
}

else{
    message = "you are out of the game"
    isAlive = false
}


}

console.log(message)


