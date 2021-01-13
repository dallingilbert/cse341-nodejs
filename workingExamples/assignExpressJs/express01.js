const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
    console.log("Inside users route!");
    res.send('<h1>Welcome to my Users Page!</h1>');
    return res.end();
});

app.use("/", (req, res, next) => {
    console.log("Inside the root route!");
    res.send('<h1>Welcome to my Express.js Page!</h1>');
});


app.listen(3000);