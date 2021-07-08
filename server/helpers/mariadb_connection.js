const mariadb = require("mariadb");

const pool = mariadb.createPool({
 host: "localhost",
 user: "root",
 password: "ilechukwu12#",
 database: "usermanagementsystem",
});

pool.getConnection((err, connection) => {
 if (err) {
  console.log(err.code);
 }

 if (connection) {
  console.log("MariaDB connected");
  connection.release();
 }
});

module.exports = pool;
