const AbstractRepository = require("./AbstractRepository");

class filingRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "children" as configuration
    super({ table: "filing" });
  }

  // The C of CRUD - Create operation

  async create(filing) {
    // Execute the SQL INSERT query to add a new filing to the "filing" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [filing.title, filing.user_id]
    );

    // Return the ID of the newly inserted filing
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific filing by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the filing
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "filing" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing filing

  // async update(filing) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an filing by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = filingRepository;
