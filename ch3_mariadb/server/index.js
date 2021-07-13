const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'.env'});
const app = express();

/**
 * Middleware
 */
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

/* router */
const sampleRouter = require('./routes/sample');
app.use('/sample',sampleRouter);


// const mariadb = require('mariadb');
// mariadb.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'test',
//     port: 3306,
//     connectionLimit: 5,
//     allowPublicKeyRetrieval: true
// })
//     .then(conn => console.log('connected'))
//     .catch(err => console.log(err));


// 포트 연결
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});