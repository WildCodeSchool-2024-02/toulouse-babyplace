const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(childcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [childcareCenter.mail, childcareCenter.password]
    );

    return result.insertId;
  }
}

module.exports = ChildcareCenterRepository;
