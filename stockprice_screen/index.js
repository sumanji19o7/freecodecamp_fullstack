import {getStockData} from "./fakeStockAPI.js"

setInterval(function(){
    const stockdata = getStockData()
    renderStockData(stockdata)

},1000)

let previousprice = null

function renderStockData(stockproperties){
    const {name,sym,price,time} = stockproperties
    
    const stockname = document.getElementById("stockname")
    const stocksymbol = document.getElementById("symbol")
    const stockprice = document.getElementById("stockprice")
    const timenow= document.getElementById("currenttime")
    
    const arrow = price > previousprice ? "🔼" : price < previousprice ?"🔽":"▶️"

    

    console.log(name)
    stockname.innerText = "Name: " + name 
    stocksymbol.innerText = "Symbol: " + sym
    stockprice.innerText = "Price: " + price + arrow
    timenow.innerText = "Time: " + time

    previousprice = price


}


