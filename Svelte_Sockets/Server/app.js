import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import http from "http";
const server = http.createServer(app);

import userReg from "./userReg.js";
app.use(userReg);

import session from "express-session";
app.use(session({
    
}));




const PORT = 8888;

server.listen(PORT, () => {
    console.log("App runing on port " + PORT);
})

