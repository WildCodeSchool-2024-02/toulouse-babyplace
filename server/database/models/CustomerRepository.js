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
}

module.exports = CustomerRepository;
