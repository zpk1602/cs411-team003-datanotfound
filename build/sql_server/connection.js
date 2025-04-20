const mysql = require('mysql2');

var db = mysql.createConnection({
    host: '35.238.193.162',
    user: 'root',
    password: 'test1234',
    database: 'db', 
    port: 3306,
    connectTimeout: 10000
})

db.connect(function(err) {
    if (err) {
      console.log("Fail to connect to db");
      return;
    }
    console.log("Connected to db");
});


module.exports = db