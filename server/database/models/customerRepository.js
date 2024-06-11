const AbstractRepository = require("./AbstractRepository");

class CustomerRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "customer" });
  }

  // The C of CRUD - Create operation

  async create(Customer) {
    // Execute the SQL INSERT query to add a new Customer to the "Customer" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Customer.title, Customer.user_id]
    );

    // Return the ID of the newly inserted Customer
    return result.insertId;
  }
}

module.exports = CustomerRepository;
