//fetch and then

 //fetch().then()

 fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data =>{
    const imageelement = document.createElement('img') //creates an image element
    imageelement.src = data.message //the source of the image element is now the url fetched from the API
    imageelement.alt = 'random-dog-picture'
    document.getElementById('imgcontainer').appendChild(imageelement)

})


async function fetchData(){
    const response = await fetch ('https://apis.scrimba.com/bored/api/activity')
    const data = await response.json()
    console.log(data)
}


fetchData()

//promises are of three types

//pending = the promise which is yet to be completed - the request sent to the server and processing it takes some time

//resolved/fulfilled = the promise has been completed - the outcome/reult can be negative or positive


//handling rejected promises

fetch('https://dogsg.ceo/api/breeds/image/random').then(response => response.json()).then(data =>{
    console.log(data)
}).catch(err => console.log("oops its an error"))
//wrong api address, so the function in .catch is executed

//IN ASYN AND AWAIT FUNCTIONS - USING TRY AND CATCH BLOCK TO PREVENT ERRORS OR MAKE CUSTOM ERRORS


async function tryandcatch(){
    
try{

    const response = await fetch('https://dog.ceo/api/breeds/image/random')   //trying with the wrong api so it throws an error
    const data = await response.json()
    console.log(data)

    if (!response.ok){
        throw new Error ("api is wrong")

    }

}

catch(error) {
    console.log(error)

}

finally{
    console.log("ooperation completed")

}
}

//another way of handling errors is the .ok property of the response === the data picked up from the server which will return a boolean value
/* values of
200-299 = successful response = TRUE
404 = not found = FALSE
500 = SERVER ERROR = FALSE*/

tryandcatch()


/* try and catch-
        catches exceptions and errors that occur during the
        execution of the code, including networks errors and other unexpected issues
        
    response.ok -
    checks the success of the HTTP resposnse status, which might not throw an error but still indicates
    a failure*/

    //methods

/* get = for getting data
   post= for posting data
   put = for updating data
   delete = deleting data
   patch and options */

// fetch method has two arguments one is api address, other is the method

