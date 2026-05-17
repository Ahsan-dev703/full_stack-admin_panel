const mongoose = require("mongoose");
const AppError = require("../utils/appError");

const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new AppError("MONGODB_URI is required in environment variables", 500);
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDatabase;
