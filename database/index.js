
const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3327",
  database: "foodDb",
});

db.connect();

db.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

// db.end(); <==== this was breaking the seed script??

module.exports = db;