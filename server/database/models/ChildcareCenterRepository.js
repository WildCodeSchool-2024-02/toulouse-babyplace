const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(childcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, phone, street_address, city, zip_code, mail, password, url, opening, closing, capacity) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        childcareCenter.name,
        childcareCenter.description,
        childcareCenter.phone,
        childcareCenter.street_address,
        childcareCenter.city,
        childcareCenter.zip_code,
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

  async readAll(opening, closing) {
    // Execute the SQL SELECT query to retrieve all ChildcareCenters from the "ChildcareCenter" table
    const [rows] = await this.database.query(
      `select * from ${this.table} ${opening && closing ? "where opening < ? and closing > ?" : ""}`,
      [opening, closing]
    );

    // Return the array of ChildcareCenters
    return rows;
  }
}

module.exports = ChildcareCenterRepository;
