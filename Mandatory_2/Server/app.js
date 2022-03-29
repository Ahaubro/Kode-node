import express from "express"
import path from "path";
import productRouter from "./routers/productRouter.js"


const app = express();

app.use(express.json());

app.use(express.static(path.resolve("../Client/public")));


app.use(productRouter);




const PORT = 9999;


app.listen(PORT, () =>{
    console.log("App running on port " + PORT)
})