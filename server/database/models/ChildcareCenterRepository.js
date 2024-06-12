const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(ChildcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [ChildcareCenter.title, ChildcareCenter.user_id]
    );

    return result.insertId;
  }
}

module.exports = ChildcareCenterRepository;
