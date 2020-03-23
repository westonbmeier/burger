var mysql = require("mysql");
//host, port and mysql login
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "burger_db"
});

//connection function
connection.connect(function(err) {
    if (err) {
      console.error("connection error @: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Exporting module for ORM
  module.exports = connection;