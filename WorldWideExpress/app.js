const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
app.use(express.static("public"));


app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(9999, (error) => {
    console.log("Sever running on 9999");
});

app.get("/welcome", (req, res) => {
    res.send(`
    <h1>Welcome to my website<h1/>
    `)
})


app.get()