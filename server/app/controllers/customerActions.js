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

module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
