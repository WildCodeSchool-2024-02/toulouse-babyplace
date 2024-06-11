const AbstractRepository = require("./AbstractRepository");

class customerRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "children" as configuration
    super({ table: "customer" });
  }

  // The C of CRUD - Create operation

  async create(customer) {
    // Execute the SQL INSERT query to add a new customer to the "customer" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [customer.title, customer.user_id]
    );

    // Return the ID of the newly inserted customer
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific customer by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the customer
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "customer" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing customer

  // async update(customer) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an customer by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = customerRepository;
