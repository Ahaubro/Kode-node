import db from "./createConnection.js";

const isInDeleteMode = true;

if(isInDeleteMode) {
    await db.exec(`DROP TABLE IF EXISTS products;`);
    await db.exec(`DROP TABLE IF EXISTS users;`);
}

await db.exec(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(80),
    price DOUBLE,
    description VARCHAR(120),
    imagePath VARCHAR(120)
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(80),
    password VARCHAR(150),
    isAdmin BOOLEAN
    
);`);

if(isInDeleteMode) {
    await db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Coca cola', 25, 'Den er god', './images/cola.jpg')`);
    await db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Grøn Tuborg', 20, 'Den er rigtig god', './images/gt.jpg')`);
    await db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Rød prince', 66, 'Den er god og farlig', './images/rp.jpg')`);
    await db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Vandpibe', 250, 'Den er god', './images/vp.jpg')`);
    await db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Sur mælk', 7, 'Den er ikke frisk', './images/img.png')`);
    await db.run(`INSERT INTO users (username, password, isAdmin) VALUES ('Thorminathor', '1234', false)`);
    await db.run(`INSERT INTO users (username, password, isAdmin) VALUES ('Arex', '0', true)`);

}