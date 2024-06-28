const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepositoryStructure extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(childcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (types, name, phone) values (?, ?, ?)`,
      [childcareCenter.types, childcareCenter.name, childcareCenter.phone]
    );

    return result.insertId;
  }
}

module.exports = ChildcareCenterRepositoryStructure;
