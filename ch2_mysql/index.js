const express = require('express');
const conf = require('./dbconfig.js')
const app = express();

// const mdbConn = require('./model.js');
// mdbConn.getUserList()
//     .then(rows => {
//         console.log(rows);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// mysql
// const mysql = require('mysql');
// const db = mysql.createConnection({
//     host: conf.DBHost,
//     user: conf.DBUser,
//     password: conf.DBPass,
//     database: 'node',
//     port: conf.DBPort,
//     connectionLimit: 5,
//     allowPublicKeyRetrieval: true
// });
// db.connect()

//mariadb
const mariadb = require('mariadb');
mariadb.createConnection({
    host: conf.DBHost,
    user: conf.DBUser,
    password: conf.DBPass,
    database: 'node',
    port: conf.DBPort,
    connectionLimit: 5,
    allowPublicKeyRetrieval: true
})
    .then(conn => console.log('connected'))
    .catch(err => console.log(err));



// 포트 연결
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});