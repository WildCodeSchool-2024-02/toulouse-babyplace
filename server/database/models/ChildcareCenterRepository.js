const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    super({ table: "childcare_center" });
  }

  async create(childcareCenter) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, phone, street_address, city, zip_code, email, hashed_password, url, opening, closing, capacity) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        childcareCenter.name,
        childcareCenter.description,
        childcareCenter.phone,
        childcareCenter.street_address,
        childcareCenter.city,
        childcareCenter.zip_code,
        childcareCenter.email,
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

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }

  async update(id, updateData) {
    if (Object.keys(updateData).length === 0) {
      return false;
    }

    const fields = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = Object.values(updateData);
    const query = `UPDATE ${this.table} SET ${fields} WHERE id = ?`;
    const [result] = await this.database.query(query, [...values, id]);
    return result.affectedRows > 0;
  }
}

module.exports = ChildcareCenterRepository;
