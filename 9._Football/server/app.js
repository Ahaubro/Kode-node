import express from "express";
import playerRouter from "./routers/playersRouter.js"


//import cors from "cors"
//app.use(cors());




const app = express();

// Bedre alternativ til cors
import path from "path";
app.use(express.static(path.resolve("../client/public")))





app.use(playerRouter)




const PORT = process.env.PORT || 9999;


app.listen(PORT, () => {
    console.log("App running on port 9999")
});