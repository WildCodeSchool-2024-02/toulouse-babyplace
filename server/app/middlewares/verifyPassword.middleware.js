const argon2 = require("argon2");
const tables = require("../../database/tables");

const verifyPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const user = await tables.customer.readByEmail(req.body.email);

    if (!user) {
      throw new Error("Invalid email");
    }

    const isPasswordValid = await argon2.verify(user.hashed_password, password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verifyPassword;
