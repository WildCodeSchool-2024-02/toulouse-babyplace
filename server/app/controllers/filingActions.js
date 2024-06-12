const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const filings = await tables.filing.readAll();

    res.json(filings);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const filings = await tables.filing.read(req.params.id);

    if (filings == null) {
      res.sendStatus(404);
    } else {
      res.json(filings);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const filings = req.body;

  try {
    const insertId = await tables.filing.create(filings);

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
