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
// const mariadb = require('mariadb');
// mariadb.createConnection({
//     host: conf.DBHost,
//     user: conf.DBUser,
//     password: conf.DBPass,
//     database: 'node',
//     port: conf.DBPort,
//     connectionLimit: 5,
//     allowPublicKeyRetrieval: true
// })
//     .then(conn => console.log('connected'))
//     .catch(err => console.log(err));

// function getInfo(id) {
//     return new Promise((resolve, reject) => {
//         db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
//             if (data[0] == undefined) {
//                 return reject(`아이디가 존재하지 않습니다.`);
//             }
//             return resolve(data[0]);
//         });
//     });
// }

// 포트 연결
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});