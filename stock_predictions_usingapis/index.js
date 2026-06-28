import {dates} from "./utilities/dates.js"


const tickerInput = document.getElementById("ticker-input")
const submitTicker = document.getElementById("submit-ticker")
const tickerDisplay = document.getElementById("ticker-display")
const generateReport = document.getElementById("report-button")
const messageDisplay = document.getElementById("message-display")
const tickersArray = []
disablereport()


submitTicker.addEventListener("click" , ()=>{

    if (tickerInput.value.length > 2){
        tickersArray.push(tickerInput.value.toUpperCase())
        console.log(tickersArray)
        renderTickers()

    }
    
    else{
        messageDisplay.textContent = "Please enter tickers with atleast 3 or more characters"
    }

    tickerInput.value = ""
    
})

function disablereport() {
    if (tickersArray.length === 0 ) {
        generateReport.disabled = true
    }

    else{
        generateReport.disabled = false
    }
}



generateReport.addEventListener('click' , ()=>{
    disablereport()
    console.log('report button clicked')
    console.log(tickersArray.length)
})

function renderTickers(){
    tickerDisplay.textContent= ' '
    for (let i = 0 ; i < tickersArray.length; i++){
        tickerDisplay.textContent += tickersArray[i] + ' '

    }
}


//openAI api working

//a model is selected, an array of messages is passed and other optional settings

//using LLM
//algorithm that uses training data to recognise patterns and make predictions and/or decisions

// messages array -
/*first- {system or instructions, how to behave }
second- user input - what he wants info about
the array of object sent to openAI

OpenAI sends {assistant} object

*/



