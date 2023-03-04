const mysql = require('mysql2');

/**
 * @description PROD
 */
const config = {
  host: 'single-7051.banahosting.com',
  user: 'oscarmorenom_jmelo',
  password: '1077974718@jm',
  database:'oscarmorenom_control_acceso',
};

/**
 * @description LOCAL
 */
// const config = {
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "books_db"
// };

const pool = mysql.createPool(config);

module.exports = pool;