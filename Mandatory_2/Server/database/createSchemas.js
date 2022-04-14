import db from "./createConnection.js";
import bcrypt from "bcrypt";

const isInDeleteMode = true;
const saltRounds = 12;
const thorsPassHash = await bcrypt.hash("1234", saltRounds);
const alexPassHash = await bcrypt.hash("0", saltRounds);
const mPassHash = await bcrypt.hash("00", saltRounds);

if(isInDeleteMode) {
    db.exec(`DROP TABLE IF EXISTS products`);
    db.exec(`DROP TABLE IF EXISTS users`);
}

db.exec(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(80),
    price DOUBLE,
    description VARCHAR(120),
    imagePath VARCHAR(120)
);`);

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(80),
    password VARCHAR(150),
    isAdmin BOOLEAN
    
);`);

if(isInDeleteMode) {
    db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Coca cola', 25, 'Den er god', './images/cola.jpg')`);
    db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Grøn Tuborg', 20, 'Den er rigtig god', './images/gt.jpg')`);
    db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Rød prince', 66, 'Den er god og farlig', './images/rp.jpg')`);
    db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Vandpibe', 250, 'Den er god', './images/vp.jpg')`);
    db.run(`INSERT INTO products (name, price, description, imagePath) VALUES ('Sur mælk', 7, 'Den er ikke frisk', './images/img.png')`);
    db.run(`INSERT INTO users (username, password, isAdmin) VALUES ('Thorminathor', '${thorsPassHash}', false)`);
    db.run(`INSERT INTO users (username, password, isAdmin) VALUES ('arex@gmail.com', '${alexPassHash}', true)`);
    db.run(`INSERT INTO users (username, password, isAdmin) VALUES ('malte@gmail.com', '${mPassHash}', true)`);


}

db.close();