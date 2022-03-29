import { json, Router } from "express";
import db from "../database/createConnection.js";

const router = Router();

router.get("/api/products", async (req, res) => {
    const products = await db.all("SELECT * FROM products;");

    res.send({ data: products });
});

router.post("/api/products", async (req, res) => {
    const {name, price, description} = req.body;

    const {changes} = await db.run(`INSERT INTO products (name, price, description) VALUES (?, ?, ?);`, [name, price, description]);

    res.send({rowsAffected: changes});
});

router.delete("/api/products/:id", async (req, res) => {
    const id = Number(req.params.id);

    const {changes} = await db.run(`DELETE FROM products WHERE id = ? `, [id]);

    res.send({rowsAffected: changes});
});

router.put("/api/products/:id", async (req, res) => {
    const id = Number(req.params.id);
    const {name, price, description} = req.body

    const {changes} = await db.run(`UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?`, [name, price, description, id]);

    res.send({rowsAffected: changes});
})


export default router;