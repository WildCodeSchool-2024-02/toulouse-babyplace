const AbstractRepository = require("./AbstractRepository");

class CustomerRepository extends AbstractRepository {
  constructor() {
    super({ table: "customer" });
  }

  async create(customer) {
    // Execute the SQL INSERT query to add a new customer to the "customer" table
    const [result] = await this.database.query(
      `insert into ${this.table} (hashed_password, name, firstname, email, address, phone) values (?, ?, ?, ?, ?, ?)`,
      [
        customer.hashed_password,
        customer.name,
        customer.firstname,
        customer.email,
        customer.address,
        customer.phone,
      ]
    );

    return result.insertId;
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

module.exports = CustomerRepository;
