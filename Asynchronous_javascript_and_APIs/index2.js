
//post request on the api with method post, body has title,userid and body and header
try{
    const response = await fetch ('https://apis.scrimba.com/jsonplaceholder/posts', {
        method : 'POST',
        body: JSON.stringify({
            title : 'holiday nightmares',
            body: 'when I was kidnapped in Scotland',
            userid: 100
        }),
        headers: {
            'Content-type' : 'application/json'
        }
    })

    if (!response.ok){
        throw new Error('there is a problem with the API')
    }

    const data = await response.json()
    console.log(data)
}

catch (error){
    console.log(errror)
}

finally{
    console.log('everything done')
}



//headers contain 
//extra meta info, authentication, type of data sent

//Promise constructor

//Building own async functions
function createPromise(){
    return new Promise((resolve , reject)=>{  //a promise is sent created , which maybe fulfilled or rejected
    const success = Math.random() > 0.5
    if (success){       //if the random value if true 
        resolve("operation successful")//resolve passes the value to promise which is operation successful
    }
    else{
        reject("operation failed")//if the value is false the value to promise is operation failed
    }
})
}


try {
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()
    const result = await Promise.all([promise1,promise2,promise3])
    console.log(result)
}

catch(error){
    console.log(error)//catch block collects the value of promise in the error variable and logs it out
}

//return a new promise, create a new image
/*
function preloadimage(url){
    return new Promise((resolve,reject)=>{
        const image = new Image
        image.src = url 
        image.alt = 'scenery'
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', () => reject('img is not loading'))
    })
}

try{
    const results = await preloadimage('https://scrimba.ams3.cdn.digitaloceanspaces.com/assests/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
}

catch(error){
    console.log(error)
}
*/

/* using callbacks and without promises
function uploadFile(callback){
    console.log('step 1 : uploading file...')
    setTimeout(() => {
        callback()
    },1000)
}

function processFile(callback){
    console.log('step 2 :  processing file...')
    setTimeout(() => {
        callback()
    },1000)
}

function notifyUser (callback){
    console.log('step 3: notifying user...')
    setTimeout(() => {
        callback()
    },1000)
}

uploadFile(() =>
    processFile(() =>
         notifyUser(()=>
        console.log('all callbacks done'))))

*/

//using promises

function uploadFile(){
    return new Promise ((resolve,reject) =>{
        console.log('step 1 : uploading file...')
    setTimeout(() => {
        resolve()
    },1000)
    })

    
}

function processFile(){
    return new Promise ((resolve,reject)=>{
    console.log('step 2 :  processing file...')
    setTimeout(() => {
        resolve()
        
    },1000)
    })
    
}

function notifyUser (){
    return new Promise ((resolve,reject)=>{
    console.log('step 3: notifying user...')
    setTimeout(() => {
        resolve()
        
    },1000)
    })
    
}

try {
    await uploadFile()
    await processFile()
    await notifyUser()
    console.log('everything done')
}

catch(error){

    console.log(error)

}

//promise.all


