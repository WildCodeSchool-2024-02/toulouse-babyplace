const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const customers = await tables.customer.readAll();

    res.json(customers);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const customers = await tables.customer.read(req.params.id);

    if (customers == null) {
      res.sendStatus(404);
    } else {
      res.json(customers);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const customers = req.body;

  try {
    const insertId = await tables.customer.create(customers);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    const user = req.body;

    const payload = { email: user.email };
    const token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.APP_SECRET,
      maxAge: 3600000,
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signIn,
  browse,
  read,
  // edit,
  add,
  // destroy,
};
