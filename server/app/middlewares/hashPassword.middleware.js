const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const user = req.body;
  const { password } = user;

  try {
    const hashedPassword = await argon2.hash(password);
    user.password = hashedPassword;
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword };
