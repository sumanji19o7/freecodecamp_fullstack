import http from 'node:http' //imported the http module of node

const PORT = 7999 //this is the localhost port number

const server = http.createServer((Request,Response) => { // the syntax is - http.createServer(Request,Response)- request is
    Response.write('this is some data \n')
    console.log(Request.url + ' this is the url')
    Response.end('end of response') //end methods takes three parameter, (data,encoding and callback function)
    
})

server.listen(PORT, () => console.log(`server running on port : ${PORT} `)) //this is the listen command of server which listens to the message after all the 
//work is done 


