var mysql = require('mysql');
const { getSystemErrorMap } = require('util');

var con = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bb63c8227a5911",
    password: "8718d462",
    database: "heroku_83680c3aefbde88"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM products", function(err, result, fields) {
        if (err) throw err;
        results = JSON.parse(JSON.stringify(result));
        console.log(results[1].description);
    });
});