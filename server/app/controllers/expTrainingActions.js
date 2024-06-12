const tables = require("../../database/tables");

const { exp_training: expTraining } = tables;

const browse = async (req, res, next) => {
  try {
    const expTrainings = await expTraining.readAll();

    res.json(expTrainings);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const expTrainings = await expTraining.read(req.params.id);

    if (expTrainings == null) {
      res.sendStatus(404);
    } else {
      res.json(expTrainings);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const expTrainings = req.body;

  try {
    const insertId = await expTraining.create(expTrainings);

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
