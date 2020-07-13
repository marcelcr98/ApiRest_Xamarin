var mysql = require('mysql');

function handleDisconnect() {
    const connection = mysql.createConnection({
        host: 'us-cdbr-iron-east-01.cleardb.net',
        port:3306,
        user: 'bda87bde2321a4',
        password: '51ad6e9a',
        database: 'heroku_df2f4a10ff3ea9d'
    })

    connection.connect(function(err) {
        if (err) {
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000);}
    });

    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
          handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
      });
}
    
    
handleDisconnect();
module.exports = connection;

