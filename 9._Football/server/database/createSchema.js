import db from "./CreateConection.js"


const isInDeleteMode = true;

if(isInDeleteMode) {
    db.exec("DROP TABLE IF EXISTS players")
}

db.exec(`CREATE TABLE IF NOT EXISTS players(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70)
)`);


// Seed data
db.run(`INSERT INTO players (name) VALUES ('Messi')`)
db.run(`INSERT INTO players (name) VALUES ('Ronaldo')`)


db.close();