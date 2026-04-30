cards=[]

let sum = 0
let hasblackjack= false
let isAlive= false
let message = ""
let gamestart = false

let messagedis = document.getElementById("startline")
let sumdis = document.getElementById("sum")
let cardsdis = document.getElementById("cards")
playerdis = document.getElementById("account")

function startgame(){
    isAlive = true
    if (gamestart === false){
        let firstcard = drawrandom()
        let secondcard = drawrandom()
        cards.push(firstcard)
        cards.push(secondcard)
        console.log(cards)
        sum=firstcard+secondcard  
        gamestart = true  
    }

    

    
    

    rendergame()
}

function rendergame() {

    cardsdis.textContent = "Cards: "
    for (let i = 0 ; i < cards.length; i++ ){
        cardsdis.textContent += cards[i] + " "       
    }

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

//rendering the messages and buttons
messagedis.textContent = message
sumdis.textContent = "Sum: " + sum 




}

function picknewcard(){
    
    if (isAlive === true && hasblackjack === false){
    let newcard = drawrandom()
    sum = sum + newcard
   

    cards.push(newcard)
    rendergame()
}
    
    else{
        messagedis.textContent = "out of luck, game over"
    }

}

let player = {
    name:"Sumanji",
    balance: 200
}

playerdis.textContent = player.name + ":" + player.balance




function drawrandom(){
    randomcard= Math.floor(Math.random()*(13))+1

    if (randomcard === 1){
        randomcard = 11
    } 

    else if (randomcard >= 11 && randomcard <= 13){
        randomcard = 10
    }

    return randomcard
    
}




