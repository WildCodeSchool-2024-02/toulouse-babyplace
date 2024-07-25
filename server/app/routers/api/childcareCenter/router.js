const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  signUp,
  signIn,
  deleteProfile,
  updateUser,
} = require("../../../controllers/childcareCenterActions");
const {
  hashPassword,
} = require("../../../middlewares/hashPassword.middleware");
const verifyPassword = require("../../../middlewares/verifyPasswordPro.middleware");

// Route to get a list of items

router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

router.post("/sign-in", verifyPassword, signIn);

// Route to add a new item
router.post("/sign-up-pro", hashPassword, signUp);

// route to delete an user
router.delete("/", deleteProfile);

// route to modify an user
router.put("/", updateUser);

/* ************************************************************************* */

module.exports = router;
