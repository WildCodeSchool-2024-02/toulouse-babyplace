const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const user = req.body;
  const { password } = user;

  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 19 * 2 ** 10,
    timeCost: 2,
    parallelism: 1,
  };

  try {
    user.hashed_password = await argon2.hash(password, hashingOptions);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword };
