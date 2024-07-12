const tables = require("../../database/tables");

const { childcare_center: childcareCenter } = tables;

const browse = async (_, res, next) => {
  try {
    const centers = await childcareCenter.readAll();

    res.json(centers);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const center = await childcareCenter.read(req.params.id);

    if (center == null) {
      res.sendStatus(404);
    } else {
      res.json(center);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const center = req.body;

  try {
    const insertId = await tables.childcare_center.create(center);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const signUp = async (req, res) => {
  try {
    const result = await tables.childcare_center.create(req.user);
    if (result.affectedRows === 0) {
      res.status(400).send("Bad request");
    } else {
      res.sendStatus(201);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving data from database");
  }
};

module.exports = {
  browse,
  read,
  add,
  signUp,
};
