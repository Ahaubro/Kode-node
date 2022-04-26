import express from "express";
import path from "path";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import session from "express-session";
import helmet from "helmet";



const app = express();

app.use(express.json());

app.use(express.static(path.resolve("../Client/public")));

app.use('/api', helmet());

app.use(session({
    secret: 'Nix pille',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(productRouter);

app.use(userRouter);

app.get('*', (req, res) => res.sendFile(path.resolve('../Client/public/index.html')));

const PORT = 9998;


app.listen(PORT, () =>{
    console.log("App running on port " + PORT)
})