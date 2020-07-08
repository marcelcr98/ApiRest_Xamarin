var mysql = require('mysql');

const connection = mysql.createConnection({
    host: ' ',
    port:3306,
    user: ' ',
    password: ' ',
    database: ' '
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})

module.exports = connection;
