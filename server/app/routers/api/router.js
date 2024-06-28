const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const childcareCenterRouter = require("./childcareCenter/router");
const childrenRouter = require("./children/router");
const customerRouter = require("./customer/router");
const expTrainingRouter = require("./expTraining/router");
const filingRouter = require("./filing/router");
const ChildcareCenterStructure = require("./childcareCenterStructure/router");

router.use("/childcare-center", childcareCenterRouter);
router.use("/children", childrenRouter);
router.use("/customer", customerRouter);
router.use("/exp-training", expTrainingRouter);
router.use("/filing", filingRouter);
router.use("/childcare-center-structure", ChildcareCenterStructure);

/* ************************************************************************* */

module.exports = router;
