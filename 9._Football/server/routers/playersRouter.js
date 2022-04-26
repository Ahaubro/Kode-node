import { json, Router } from "express";


const router = Router();

import db from "../database/CreateConection.js"

export default router;


router.get("/players", async (req, res) => {
    const players = await db.all(`SELECT * FROM players`);
    res.send({data: players });
})