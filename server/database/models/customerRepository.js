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

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Customer by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Customer
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Customers from the "Customer" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Customers
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Customer

  // async update(Customer) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Customer by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CustomerRepository;
