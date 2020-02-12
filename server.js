const express = require('express');
const bodyParser = require('body-parser');

// instance of the server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// first parameter is the request, the last parameter is the response
app.get('/', (req, res) => {
    res.send("Hello!"); // res.send returns the information to the server itself
});

app.get('/greeting', (req, res) => {
    console.log(req.query);
    res.send('Hello, ' + req.query.name);
});

app.post('/submit-data', (req, res) => {
    console.log(req.body);
    res.send('Received a POST request');
});

app.listen(3000, () => { // This is a callback function
    console.log('Server has started at port 3000');
});
