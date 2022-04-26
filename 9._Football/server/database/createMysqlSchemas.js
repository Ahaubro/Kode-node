import db from "./createMysqlConection.js";


db.query(`
CREATE TABLE IF NOT EXISTS players (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150)

    );
`);


db.end();