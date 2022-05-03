import db from "./createMysqlConection.js";

/*db.query(`INSERT INTO players (name) VALUES ('Malte')`, (err, data) => {
    console.log(data);

    db.end();
});*/

db.query(`INSERT INTO players (name) VALUES ('Malte')`);

db.end();
