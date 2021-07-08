
const { ALPN_ENABLED } = require('constants');
const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use((req, res, next) => {
    console.log('모든 요청 실행')
    next();
});

app.get('/middleware', (req, res, next) => {
    console.log('GET / 요청에서만 실행된다.')
    next();
}, (req, res) => {
    throw new Error('에러 처리는 미들웨어로 간다.')
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).sned(err.message);
});








// 포트 연결
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});