//fetch and then

 //fetch().then()

 fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => console.log(data))
 console.log("end")
