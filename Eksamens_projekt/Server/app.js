import express from "express";

const app = express();

app.use(express.json());






const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("App running on port " + PORT)
})