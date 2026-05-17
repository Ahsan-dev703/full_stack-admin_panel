const authService = require("../services/auth.service");
const AppError = require("../utils/appError");

const createCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.COOKIE_SECURE === "true",
  sameSite: "lax",
  maxAge: Number(
    process.env.REFRESH_TOKEN_EXPIRES_IN_MS || 7 * 24 * 60 * 60 * 1000,
  ),
});

const registerUser = async (req, res, next) => {
  const user = await authService.createUser(req.body);
  const { accessToken, refreshToken } =
    await authService.createSessionTokens(user);

  res.cookie("refreshToken", refreshToken, createCookieOptions());

  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
    },
  });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.authenticateUser(email, password);
  const { accessToken, refreshToken } =
    await authService.createSessionTokens(user);

  res.cookie("refreshToken", refreshToken, createCookieOptions());

  res.status(200).json({
    status: "success",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      accessToken,
    },
  });
};

const logoutUser = async (req, res, next) => {
  if (req.user) {
    await authService.revokeRefreshToken(req.user.id);
  }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "true",
    sameSite: "lax",
  });
  res.status(204).send();
};

const refreshToken = async (req, res, next) => {
  const token = req.cookies.refreshToken || req.body.refreshToken;
  const session = await authService.refreshTokenSession(token);
  res.cookie("refreshToken", session.refreshToken, createCookieOptions());
  res
    .status(200)
    .json({ status: "success", data: { accessToken: session.accessToken } });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
};
