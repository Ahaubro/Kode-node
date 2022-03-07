const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the small server')
})



PORT = 9999;

app.listen(PORT, (error) => {
    console.log("Server running on port: " + PORT)
})