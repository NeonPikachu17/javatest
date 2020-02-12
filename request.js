// Importing the request api
const request = require('request');

// This is a get request
request('http://localhost:3000', (err, response, body) => {
    console.log(body);
}); // You can do URL parameters

// This is a get request
request('http://localhost:3000/greeting?name=DOKIDOKILITERATURECLUB', (err, response, body) => {
    console.log(body);
}); // You can do URL parameters

const data = {
    message: "JUST MONIKA!",
    id: 1
} 

// post request
request('http://localhost:3000/submit-data',
        { method: "POST", form: data },
        (err, response, body) => {
            console.log(body);
        }
);