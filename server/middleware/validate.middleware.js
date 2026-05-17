const AppError = require("../utils/appError");

const validateBody = (schema) => async (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const details = error.details.map((item) => item.message);
    return next(new AppError(details.join(". "), 400));
  }

  req.body = value;
  next();
};

module.exports = { validateBody };
