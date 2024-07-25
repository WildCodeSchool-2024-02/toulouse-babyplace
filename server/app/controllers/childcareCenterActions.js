const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const { childcare_center: childcareCenter } = tables;

const browse = async (req, res, next) => {
  const { opening, closing } = req.query;

  try {
    const centers = await childcareCenter.readAll(opening, closing);

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

const signIn = async (req, res, next) => {
  try {
    const { email, id } = req.user;

    const payload = { email, userId: id };
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

const deleteProfile = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const result = await tables.childcare_center.delete(id);
    if (result) {
      return res.sendStatus(204);
    }
    return res.sendStatus(404);
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, name, firstname } = req.body;
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (firstname !== undefined) updateData.firstname = firstname;

    const result = await tables.childcare_center.update(id, updateData);
    if (result) {
      const updatedUser = await tables.childcare_center.read(id);
      return res.status(200).json(updatedUser);
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  browse,
  read,
  add,
  signUp,
  signIn,
  deleteProfile,
  updateUser,
};
