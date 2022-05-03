import express from "express"; //TYPE i package.json = module "DEN HER MÅDE"
import rateLimit from 'express-rate-limit'
import helmet from "helmet";
import path from "path"
//const express = require("express");
//const helmet = require("helmet")
//const l = require("express-rate-limit")

const app = express();

app.use(express.static("public"));

app.use(helmet());




const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


app.use("/auth", limiter);
app.use(baseLimiter)

app.post("/auth/login", (req, res) => {
    res.send({message: "You are trying to log in"})
});


import session from "express-session"

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

import planetsRouter from "./public/routers/planets.js";
app.use(planetsRouter);







app.use("/auth/*", ipLogger);


function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}


app.get("/clothes", (req, res) =>{
    res.sendFile(path.resolve("public/clothes.html")
    )
});


app.get("/frontgate", ipLogger, (req, res) =>{
    res.send({});
});


let isHatchOpen = true;


function allowEscape(req, res, next) {
    if(isHatchOpen){
    console.log("Go on");
    req.escapee = "Jimmy";
    next();
    } else {
        res.send({message: "You shall not pass!"})
    }
}


app.get("/escapehatch", allowEscape, (req, res) =>{
    res.send({message: `Congrats ${req.escapee} you ecaped`})
});


app.get("/room", (req, res, next) =>{
    console.log("You are in room 1");
    next();
});


app.get("/room", (req, res) =>{
    res.send({data: "You are in room 2"})
});


// Matches with anything - If this is set above, it will match this first
app.get("*", (req, res) =>{
    res.send("<h1> Not found </h1>")
});


const PORT = 8888;

app.listen(PORT, () => {
    console.log("App running on " + PORT)
});