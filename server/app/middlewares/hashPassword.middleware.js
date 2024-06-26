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
    const hashedPassword = await argon2.hash(password, hashingOptions);
    user.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword };
