const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Til nav
const fs = require("fs");
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();



console.log(nav)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/frontpage", (req, res) => {
    res.sendFile(__dirname + "/public/pages/frontpage/frontpage.html");
})

app.get("/themepark", (req, res) => {
    res.sendFile(__dirname + "/public/pages/themepark/themepark.html");
})


const PORT = 8080;

app.listen(PORT, (error) => {
    console.log("Port running on: ", PORT)
})