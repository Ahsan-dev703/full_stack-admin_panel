const AppError = require("./appError");

const catchAsync = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error instanceof AppError ? error : new AppError(error.message, 500));
  }
};

module.exports = catchAsync;
