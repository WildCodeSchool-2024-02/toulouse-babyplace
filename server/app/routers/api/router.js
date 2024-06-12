const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const childcareCenterRouter = require("./childcareCenter/router");

router.use("/childcareCenter", childcareCenterRouter);

const childrenRouter = require("./children/router");

router.use("/children", childrenRouter);

const customerRouter = require("./customer/router");

router.use("/customer", customerRouter);

const expTrainingRouter = require("./expTraining/router");

router.use("/expTraining", expTrainingRouter);

const filingRouter = require("./filing/router");

router.use("/filing", filingRouter);

/* ************************************************************************* */

module.exports = router;
