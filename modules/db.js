const sqlite3 = require('sqlite3');
const path = require('path');


const dbPath = path.resolve(__dirname, '../db/insiders.db');


let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the insiders database.');
    });



module.exports.execQuery = (query, params, cb) => {

    db.all(query, params, (err, rows) => {
        if (err) {
            throw err;
        }
        cb(rows);
      });
}