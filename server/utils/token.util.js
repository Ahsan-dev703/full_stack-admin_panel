const jwt = require("jsonwebtoken");
const AppError = require("./appError");

const signToken = (payload, expiresIn) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new AppError("JWT_SECRET is required for token generation", 500);
  }

  return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new AppError("JWT_SECRET is required for token verification", 500);
  }

  return jwt.verify(token, secret);
};

const createAccessToken = (user) =>
  signToken(
    { id: user.id, role: user.role },
    process.env.JWT_EXPIRES_IN || "1h",
  );

const createRefreshToken = (user) =>
  signToken({ id: user.id }, process.env.REFRESH_TOKEN_EXPIRES_IN || "7d");

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyToken,
};
