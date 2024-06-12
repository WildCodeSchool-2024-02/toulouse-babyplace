const AbstractRepository = require("./AbstractRepository");

class CustomerRepository extends AbstractRepository {
  constructor() {
    super({ table: "customer" });
  }

  async create(Customer) {
    // Execute the SQL INSERT query to add a new Customer to the "Customer" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Customer.title, Customer.user_id]
    );

    return result.insertId;
  }
}

module.exports = CustomerRepository;
