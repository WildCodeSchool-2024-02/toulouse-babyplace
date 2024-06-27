const AbstractRepository = require("./AbstractRepository");

class CustomerRepository extends AbstractRepository {
  constructor() {
    super({ table: "customer" });
  }

  async create(customer) {
    // Execute the SQL INSERT query to add a new customer to the "customer" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, first_name, mail, adress, phone) values (?, ?, ?, ?, ?)`,
      [
        customer.name,
        customer.first_name,
        customer.mail,
        customer.adress,
        customer.phone,
      ]
    );

    return result.insertId;
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where mail = ?`,
      [email]
    );

    return rows[0];
  }
}

module.exports = CustomerRepository;
