const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(childcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, phone, street_address, zip_code, city, mail, password, url, opening, closing, capacity) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        childcareCenter.name,
        childcareCenter.description,
        childcareCenter.phone,
        childcareCenter.street_address,
        childcareCenter.zip_code,
        childcareCenter.city,
        childcareCenter.mail,
        childcareCenter.hashed_password,
        childcareCenter.url,
        childcareCenter.opening,
        childcareCenter.closing,
        childcareCenter.capacity,
      ]
    );

    return result.insertId;
  }
}

module.exports = ChildcareCenterRepository;
