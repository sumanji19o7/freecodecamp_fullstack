let person = {
    name : "sumanji",
    age : 19,
    country : "Norway"
}

function printsomething(){

    console.log(person.name)
}
printsomething()




// traversing list randomly , one element at a time
let hands= ["rock","paper","scissors"]

function gethand(){
    let randomindex = Math.floor(Math.random()*3)
    return hands[randomindex]

}

console.log( gethand ())

let data =[
    {
        player : "Jane",
        score:52
    },

    {
        player : "Mark",
        score:41
    }
]

console.log( data[1].score )