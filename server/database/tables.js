// Import the repository modules responsible for handling data operations on the tables

const ChildcareCenter = require("./models/ChildcareCenterRepository");
const ChildcareCenterRepositoryStructure = require("./models/ChildcareCenterRepositoryStructure");
const ChildrenRepository = require("./models/ChildrenRepository");
const CustomerRepository = require("./models/CustomerRepository");
const ExpTrainingRepository = require("./models/ExpTrainingRepository");
const FilingRepository = require("./models/FilingRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table

tables.childcare_center = new ChildcareCenter();
tables.children = new ChildrenRepository();
tables.customer = new CustomerRepository();
tables.exp_training = new ExpTrainingRepository();
tables.filing = new FilingRepository();
tables.childcare_center_structure = new ChildcareCenterRepositoryStructure();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
