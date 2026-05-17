const AppError = require("../utils/appError");

const notFound = (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";
  const response = {
    status,
    message: err.message || "Internal Server Error",
  };

  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
    response.details = err.details || null;
  }

  if (err.name === "ValidationError") {
    response.message = Object.values(err.errors)
      .map((fieldError) => fieldError.message)
      .join(". ");
    response.statusCode = 400;
  }

  if (err.name === "CastError") {
    response.message = `Invalid ${err.path}: ${err.value}`;
    response.statusCode = 400;
  }

  res.status(statusCode).json(response);
};

module.exports = { notFound, errorHandler };
