const jwt = require('jsonwebtoken');
const { DocumentProvider } = require('mongoose');
const { JWT_SECRET } = require('../config');

module.exports = function (req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    throwError(400, 'Token must be sent')
  }

  jwt.verify(token, JWT_SECRET, function (err, decodedToken) {
    if (err) {
      throwError(401, 'Invalid token')
    }
    req.user = decodedToken.user;
    next();
  })
}

function throwError(statusCode, message) {
  const error = new Error();
  error.status = statusCode;
  error.message = message;
  throw error;
}