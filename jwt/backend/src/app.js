const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const { verifyToken } = require('./verifyToken');

dotenv.config();
const app = express();
app.use(cookieParser());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.get('/generate', (req, res) => {
  try {
    const token = jwt.sign(
      {
        id: 'user',
        name: 'nick',
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1m', // 유효 기간 60 * 1000 ms단위로도 작성 가능
        issuer: 'kzv', // 발급자
      },
    );

    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: '500',
      error: 'server error',
    });
  }
});

app.get('/verify', verifyToken, (req, res) => {
  res.json(req.decode);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
