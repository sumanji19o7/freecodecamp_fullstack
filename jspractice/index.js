const images = [
    "image1.png",
    "image2.png",
    
]

const container = document.getElementById("container")

let imageslist = ""

for (let i = 0 ; i < images.length ; i++){
    
    container.innerHTML += `<img src = "${images[i]}">`
    console.log(imageslist)


}
const playerguess = 3
const correctguess = 6

const message = playerguess === correctguess ? `correct answer` : `wrong answer`
console.log(message)


const items = "coffee"

switch (items){
    case 'coffee':
        price = 2
        break
    
    case 'sandwhich':
        price = 3
        break

    case 'tea':
        price = 1
        break

    default:
        console.log(`sorry we dont have ${items}`)


}
console.log(`price of ${items} is ${price}`)


console.log("helloji")
function greeting (){
    console.log("printed after delay")
}

const stoppingtime = setTimeout(greeting,5000)
//setTimeout(function,time,argument(s))

//clearTimeout(stoppingtime)  
//syntax ->> clearTimeout(name of setTimeout)

setTimeout(function(){
    console.log("printed after 7 sec")
},7000)

//javascript is single script single, non blocking language


//javascript runtime environment->> most common is V8 by chrome based browsers
/* The heap- handles memory allocation so we dont have to
    THE CALL STACK- as javascript is single threaded, the call stack can only execute only one piece of code at a time
    in its singel thread
     */


//Constructors-- inbuilt and custom
// date runtime errors are some inbuilt ,,,,  custom can be made by the programmer for use in future or other codes

//DATE CONSTRUCTOR

const datesnapshot = new Date()
console.log( datesnapshot.toDateString())

//[to only get the year] -->> use new Date().getFullYear()

console.log(datesnapshot.getFullYear())

//Error constructor

const name = `Brock`

function checkUsername(username){
    if (username){
        console.log()
    }

    else{
       throw new Error('no username provided')

       // throw new Error gives error in red
       // console.log() gives error in plain string
    }
}

checkUsername()