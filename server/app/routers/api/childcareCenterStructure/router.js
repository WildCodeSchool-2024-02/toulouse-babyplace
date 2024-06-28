const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { addStructure } = require("../../../controllers/childcareCenterActions");

// Route to add a new item
router.post("/add", addStructure);

/* ************************************************************************* */

module.exports = router;
