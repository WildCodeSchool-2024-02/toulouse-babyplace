const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  add,
  signIn,
  signUp,
  deleteProfile,
  updateUser,
} = require("../../../controllers/customerActions");
const {
  hashPassword,
} = require("../../../middlewares/hashPassword.middleware");
const verifyPassword = require("../../../middlewares/verifyPassword.middleware");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Route to verify password
router.post("/sign-in", verifyPassword, signIn);

// route to register a new user
router.post("/sign-up", hashPassword, signUp);

// route to delete an user
router.delete("/", deleteProfile);

// route to modify an user
router.put("/", updateUser);

/* ************************************************************************* */

module.exports = router;
