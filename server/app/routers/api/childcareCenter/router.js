const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  addLogin,
} = require("../../../controllers/childcareCenterActions");
const {
  hashPassword,
} = require("../../../middlewares/hashPassword.middleware");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", hashPassword, addLogin);

/* ************************************************************************* */

module.exports = router;
