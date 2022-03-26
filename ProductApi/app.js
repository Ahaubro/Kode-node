import express from "express";
import cors from "cors";
//import { json } from "express/lib/response"



const app = express();

app.use(express.json());

app.use( cors( { origin: "*" } ) );

let products = [
    
    {
        id: 1,
        name: "Cola",
        price: 20,
        description: "Den er god",
        imagePath: "/images/cola.jpg"
    },

    {
        id: 2,
        name: "Grøn Tuborg",
        price: 15,
        description: "Den er god",
        imagePath: "/images/gt.jpg"
    },

    {
        id: 3,
        name: "Rød prince",
        price: 55,
        description: "Den dræber, meeeen den er god",
        imagePath: "/images/rp.jpg"
    },

    {
        id: 4,
        name: "Vandpibe",
        price: 300,
        description: "Den ryger godt",
        imagePath: "/images/vp.jpg"
        
    }
];

let nextId = 5;



//Find all products
app.get("/", (req, res) =>{
    const toJson = JSON.stringify(products);
    res.status(200).send(toJson);
});


//Find product by ID
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    const toJson = JSON.stringify(product);
    res.status(200).send(toJson);
});


//Create prduct
app.post("/products", (req, res) => {
    const product = req.body;
    product.id = nextId;
    nextId ++;
    products.push(product);
    const toJson = JSON.stringify(product);
    res.status(201).send(toJson)

});


//Edit product
app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(b => b.id === id);
    const product = req.body;
    product.id = id;
    products[index] = product;
    const toJson = JSON.stringify(product);
    res.status(200).send(product);
});


//Delete product
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id == id);
    const toJson = JSON.stringify(product);
    
    products = products.filter(p => p.id != id)

    res.status(200).send(product);
});



const PORT = 8181;

app.listen(PORT, () =>{
    console.log("Server running on port " + PORT)
})