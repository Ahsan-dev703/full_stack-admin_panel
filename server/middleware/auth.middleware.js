const AppError = require("../utils/appError");
const { verifyToken } = require("../utils/token.util");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    return next(new AppError("Authentication required", 401));
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id).select(
      "name email role status settings",
    );

    if (!user || user.status !== "active") {
      return next(new AppError("User not found or inactive", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }
};

module.exports = authMiddleware;
