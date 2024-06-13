const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const childrens = await tables.children.readAll();

    res.json(childrens);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const childrens = await tables.children.read(req.params.id);

    if (childrens == null) {
      res.sendStatus(404);
    } else {
      res.json(childrens);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const childrens = req.body;

  try {
    const insertId = await tables.children.create(childrens);

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
