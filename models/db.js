var mysql = require('mysql');

const connection = mysql.createPool({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'bda87bde2321a4',
    password: '51ad6e9a',
    database: 'heroku_df2f4a10ff3ea9d'
})



module.exports = connection;
