const User = require("../models/User");
const Setting = require("../models/Setting");
const AppError = require("../utils/appError");

const getUserById = async (userId) =>
  User.findById(userId).populate(
    "settings",
    "theme language timezone notifications preferences",
  );

const getUserByEmail = async (email) =>
  User.findOne({ email: email.trim().toLowerCase() });

const updateProfile = async (userId, updates) => {
  const allowed = ["name", "email", "avatar"];
  const filtered = Object.keys(updates).reduce((acc, key) => {
    if (allowed.includes(key)) acc[key] = updates[key];
    return acc;
  }, {});

  if (filtered.email) {
    filtered.email = filtered.email.trim().toLowerCase();
    const existing = await User.findOne({
      email: filtered.email,
      _id: { $ne: userId },
    });
    if (existing) {
      throw new AppError("Email is already taken", 409);
    }
  }

  const user = await User.findByIdAndUpdate(userId, filtered, {
    new: true,
    runValidators: true,
  }).populate("settings", "theme language timezone notifications preferences");
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

const updatePassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId).select("+password");
  if (!user || !(await user.comparePassword(currentPassword))) {
    throw new AppError("Current password is invalid", 401);
  }

  user.password = newPassword;
  await user.save();
  return user;
};

const ensureSettingsForUser = async (userId) => {
  let settings = await Setting.findOne({ user: userId });
  if (!settings) {
    settings = await Setting.create({ user: userId });
    await User.findByIdAndUpdate(userId, { settings: settings._id });
  }
  return settings;
};

const updateSettings = async (userId, updates) => {
  const settings = await ensureSettingsForUser(userId);
  Object.assign(settings, updates);
  await settings.save();
  return settings;
};

module.exports = {
  getUserById,
  getUserByEmail,
  updateProfile,
  updatePassword,
  updateSettings,
};
