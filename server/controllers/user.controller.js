const userService = require("../services/user.service");

const getCurrentProfile = async (req, res) => {
  const user = await userService.getUserById(req.user.id);
  res.status(200).json({ status: "success", data: { user } });
};

const updateProfile = async (req, res) => {
  const user = await userService.updateProfile(req.user.id, req.body);
  res.status(200).json({ status: "success", data: { user } });
};

const updatePassword = async (req, res) => {
  await userService.updatePassword(
    req.user.id,
    req.body.currentPassword,
    req.body.newPassword,
  );
  res
    .status(200)
    .json({ status: "success", message: "Password updated successfully" });
};

const updateSettings = async (req, res) => {
  const settings = await userService.updateSettings(req.user.id, req.body);
  res.status(200).json({ status: "success", data: { settings } });
};

module.exports = {
  getCurrentProfile,
  updateProfile,
  updatePassword,
  updateSettings,
};
