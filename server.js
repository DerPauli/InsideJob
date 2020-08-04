const db        = require('./modules/db.js');
const random    = require('random');
const express   = require('express');
const app       = express();
const fs        = require('fs');
const path      = require('path');
const pug       = require('pug');

// general
const port = 80;




app.get('/getInsider', (req, res) => {

    // query All
    let findAll = `SELECT value, author, timestamp FROM insider`;

    db.execQuery(findAll, [], (rows) => {
        let r = random.int(min = 0, max = rows.length - 1);
        res.send(rows[r]);
    });
});





// request
const pugIndex = pug.compileFile('pug/index.pug');
fs.writeFileSync('html/index.html', pugIndex());

app.use('', express.static(path.join(__dirname, '/html/')));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});