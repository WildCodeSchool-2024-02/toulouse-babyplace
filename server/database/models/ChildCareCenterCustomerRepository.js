const AbstractRepository = require("./AbstractRepository");

class ChildCareCenterCustomerRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center_customer" });
  }
}

module.exports = ChildCareCenterCustomerRepository;
