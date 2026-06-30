import http from "node:http"; //imported the http module of node
import { getDataFromDB } from "./db.js";
import { Resolver } from "node:dns";
import { queryObjects } from "node:v8";

const PORT = 7999; //this is the localhost port number

const sendJsonResponse = (res, statusCode, payload) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = statusCode;
  res.end(JSON.stringify(payload));
};

const filteringDestinations = (data, locationtype, locationname) => {
  return data.filter((destination) => {
    return (
      destination[locationtype].toLowerCase() === locationname.toLowerCase()
    );
  });
};

const getDataFromQueryParams = (data, queryObj) => {
  const { continent, country } = queryObj;

  if (continent) {
    data = data.filter(
      (destination) =>
        destination.continent.toLowerCase() === continent.toLowerCase(),
    );
  }

  if (country) {
    data = data.filter(
      (destination) =>
        destination.country.toLowerCase() === country.toLowerCase(),
    );
  }

  return data;
};

const server = http.createServer(async (Request, Response) => {
  //the function has to be async because of the await keyword , not be use outside a async function
  const Destinations = await getDataFromDB(); //it is async function so a await has to be used
  // the syntax is - http.createServer(Request,Response)- request is
  //to write or pass some data the use response.write(takes the data as argument and returns it to the server)

  const urlObj = new URL(Request.url, `https://${Request.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);
  console.log(queryObj);
  console.log(urlObj);

  if (urlObj.pathname === "/api" && Request.method === "GET") {
    //first if statement to display all objects , the whole array
    let filteredData = getDataFromQueryParams(Destinations, queryObj);

    sendJsonResponse(Response, 200, filteredData);
    sendJsonResponse(Response, 200, filteredData);
  } else if (
    Request.url.startsWith("/api/continents") &&
    Request.method === "GET"
  )
  //else if statement for getting the info of specific continent
  //
  {
    const continent = Request.url.split("/").pop();
    // this gives the last element after making the string an array separated by slashes

    sendJsonResponse(Response, 200, continent);
  } else {
    sendJsonResponse(Response, 404, {
      error: "not found",
      message: "the requested route does not exist",
    });
  }

  //end methods takes three parameter, (data,encoding and callback function)
  // sending data, you should have the content type written - like application/json, text/html, text/css , application/javascript
});

//sending data in JSON- standard for compatability - HTTP is text based protocol, so have to go back and forth with text and json data
// JSON.stringify (data to be sent)

server.listen(PORT, () => console.log(`server running on port : ${PORT}`)); //this is the listen command of server which listens to the message after all the
//work is done

/* to use the query parameters - like /api?name=TOM&location=itlay
using node to extract the info about the query parameters
exapmple url === /api?name=jack&location=Britain
const urlobj = new URL (req.url,`http://${req.headers.host})*/

//req.headers is the object containing all the info about the headers
/*req.headers.host will give the localhost:8000 (or any other port number)

the urlobj has a parameter as searchParams
to make it a real object
making another variable const queryobj = Object.fromEnteries(urlobj.searchParams)
now we have the object as {name:value and country : value}*/
