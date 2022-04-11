import express from "express";
import path from "path";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import session from "express-session";


const app = express();

app.use(express.json());

app.use(express.static(path.resolve("../Client/public")));


app.use(session({
    secret: 'keyboard cat should not be pushed',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(productRouter);

app.use(userRouter);



const PORT = 9998;


app.listen(PORT, () =>{
    console.log("App running on port " + PORT)
})