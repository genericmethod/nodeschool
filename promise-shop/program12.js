var HTTP = require("q-io/http");

//make HTTP request
HTTP.read("http://localhost:1337")
    .then(response => {
        console.log(JSON.parse(response));
    }, err => {
        console.log(err);
    });