const express = require("express");
const app = express();


app.use(express.json());
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


const fs = require("fs");
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();


const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const one = fs.readFileSync("./public/pages/documentationPages/sessionOne/one.html").toString();
const two = fs.readFileSync("./public/pages/documentationPages/sessionTwo/two.html").toString();
const three = fs.readFileSync("./public/pages/documentationPages/sessionThree/three.html").toString();
const four = fs.readFileSync("./public/pages/documentationPages/sessionFour/four.html").toString();
const terminalCommands = fs.readFileSync("./public/pages/documentationPages/terminalCommands/terminalCommands.html").toString();


const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "My mandatory") + frontpage + footer;
const pageOne = nav.replace("%%TITLE_PLACEHOLDER%%", "Intro") + one + footer;
const pageTwo = nav.replace("%%TITLE_PLACEHOLDER%%", "Express server") + two + footer;
const pageThree = nav.replace("%%TITLE_PLACEHOLDER%%", "Implement RestAPI") + three + footer;
const pageFour = nav.replace("%%TITLE_PLACEHOLDER%%", "SSR") + four + footer;
const terminalCommandsPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Commands") + terminalCommands + footer;


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/one", (req, res) => {
    res.send(pageOne);
})

app.get("/two", (req, res) => {
    res.send(pageTwo);
})

app.get("/three", (req, res) => {
    res.send(pageThree);
})

app.get("/four", (req, res) => {
    res.send(pageFour);
})

app.get("/terminalCommands", (req, res) => {
    res.send(terminalCommandsPage);
})



const PORT = 8080;


app.listen(PORT, (error) => {
    console.log("Port running on: ", PORT)
})