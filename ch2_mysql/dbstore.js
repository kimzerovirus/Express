const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const dbStore = new MySQLStore({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
});

module.exports = dbStore;