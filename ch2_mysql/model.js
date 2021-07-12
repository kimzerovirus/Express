const mariadb = require('mariadb');
const conf = require('./dbconfig.js');
const pool = mariadb.createPool({ host: 'localhost', user: 'root', connectionLimit: 5 });
// const pool = mariadb.createPool({
//     host: conf.DBHost,
//     // port: conf.DBPort,
//     user: conf.DBUser,
//     password: conf.DBPass,
//     connectionLimit: conf.connectionLimit
// });
async function GetUserList() {
    let conn, rows;
    try {
        conn = await pool.getConnection();
        conn.query('USE node');
        rows = await conn.query('SELECT * FROM users');
        console.log(rows.length)
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
        // return console.log(rows[0]);
    }
} module.exports = { getUserList: GetUserList }
