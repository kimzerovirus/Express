const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token.includes('Bearer')) {
      console.log(token.substring(7));
      req.decoded = jwt.verify(token.substring(7), process.env.JWT_SECRET);

      console.log('is authenticated');

      return next();
    }
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      req.status(419).json({
        code: 419,
        message: '토큰 만료',
      });
    }

    return res.status(401).json({
      code: 401,
      message: '유효하지 않은 토큰',
    });
  }
};
