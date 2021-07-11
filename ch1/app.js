//모듈 가져오는 순서(우선 순위)도 상관 있는 경우가 있음
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path'); //node.js 내장모듈

dotenv.config(); //.env파일을 읽어서 process.env로 만들어 준다. => process.env.COOKIE_SECRET에 cookiesecret값이 할당된다.
const app = express();
app.set('port', process.env.PORT || 3000);


/* modules 미들웨어 장착 순서에 따라 작동이 안할 수도 있다. */
app.use((req, res, next) => {
    console.log('모든 요청 실행')
    next();
});
app.use(morgan('dev')); //combined, common, short, tiny 등등의 값을 가짐 개발환경에서는 dev 배포환경에서는 combined를 사용함 dev기준{ GET / 500 7.409ms - 50 } = [HTTP메서드] [주소] [HTTP상태코드] [응답 속도] - [응답 바이트]
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public'))); // '요청경로' , '실제경로' 
app.use(express.urlencoded({ extended: false })); // false 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석함, true qs 모듈을 사용하여 쿼리스트링을 해석한다. qs모듈은 내장 모듈이 아니라 npm 패키지 모듈이다.
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    },
    name: 'session-cookie'
}))

app.use((req, res, next) => {
    console.log('모든 요청 수행');
    next();
})

/* url */
// app.get('/', (req, res) => {
//     // res.send('Hello, Express');
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/middleware', (req, res, next) => {
    console.log('GET / 요청에서만 실행된다.')
    next();
}, (req, res) => {
    throw new Error('에러 처리는 미들웨어로 간다.')
})

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).sned(err.message);
// });








// 포트 연결
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});


/*
    body-parser를 직접 설치해야 하는 경우
    JSON과 URL-encoded 형식의 데이터 외에도 Raw, Text 형식의 데이터를 추가로 헤석할 수 있다.
    Raw는 요청 데이터 본문이 버퍼 데이터일 경우, Text는 텍스트 데이터일 경우 해석하는 미들웨어이다. 따라서 이 경우에는 body-parser 설치를 해야한다.

    const bodyParser = require('body-parser);
    app.use(bodyParser.raw());
    app.use(bodyParser.text());



    요청
    morgan
    static
    json, urlencoded
    cookieParser
    라우터
    에러 처리 미들웨어
    응답
*/