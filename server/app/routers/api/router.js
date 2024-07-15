const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const childcareCenterRouter = require("./childcareCenter/router");
const customerRouter = require("./customer/router");

router.use("/childcare-center", childcareCenterRouter);
router.use("/customer", customerRouter);

/* ************************************************************************* */

module.exports = router;
