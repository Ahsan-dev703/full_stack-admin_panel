const AppError = require("../utils/appError");
const User = require("../models/User");
const Setting = require("../models/Setting");
const {
  createAccessToken,
  createRefreshToken,
  verifyToken,
} = require("../utils/token.util");

const createUser = async ({ name, email, password, role }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    throw new AppError("Email address already in use", 409);
  }

  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    password,
    role: role || "admin",
  });

  const setting = await Setting.create({ user: user._id });
  user.settings = setting._id;
  await user.save();

  return user;
};

const authenticateUser = async (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail }).select(
    "+password +refreshToken",
  );
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Invalid email or password", 401);
  }

  if (user.status !== "active") {
    throw new AppError("User account is not active", 403);
  }

  return user;
};

const createSessionTokens = async (user) => {
  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  user.refreshToken = refreshToken;
  user.lastLoginAt = new Date();
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

const revokeRefreshToken = async (userId) => {
  await User.findByIdAndUpdate(userId, { refreshToken: null }, { new: true });
};

const refreshTokenSession = async (token) => {
  if (!token) {
    throw new AppError("Refresh token is required", 401);
  }

  let decoded;
  try {
    decoded = verifyToken(token);
  } catch (error) {
    throw new AppError("Invalid refresh token", 401);
  }

  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user || user.refreshToken !== token) {
    throw new AppError("Refresh token is not recognized", 401);
  }

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { user, accessToken, refreshToken };
};

module.exports = {
  createUser,
  authenticateUser,
  createSessionTokens,
  revokeRefreshToken,
  refreshTokenSession,
};
