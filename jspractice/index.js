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