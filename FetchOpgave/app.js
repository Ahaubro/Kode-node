const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));


/*fetch("http://localhost:3000/calculatecooldinosaurs")
.then(response => response.json())
.then(result => {
    const dino = document.getElementById("id")
    dino

})*/

const fetch = require("node-fetch")

app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
    .then(response => response.text())
    .then(page => res.send(page))
});


/*fetch("https://www.google.dk/")
.then(response => response.json())
.then(result => {
    response.send(result)
})*/




app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


const PORT = 5555;

app.listen(PORT, (error) => {
    console.log("App running on port: " + PORT)
})