const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(childcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, phone, address, mail, url, types) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        childcareCenter.name,
        childcareCenter.description,
        childcareCenter.phone,
        childcareCenter.address,
        childcareCenter.mail,
        childcareCenter.url,
        childcareCenter.types,
      ]
    );

    return result.insertId;
  }
}

module.exports = ChildcareCenterRepository;
