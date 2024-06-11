const AbstractRepository = require("./AbstractRepository");

class FilingRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "filing" });
  }

  // The C of CRUD - Create operation

  async create(Filing) {
    // Execute the SQL INSERT query to add a new Filing to the "Filing" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Filing.title, Filing.user_id]
    );

    // Return the ID of the newly inserted Filing
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Filing by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Filing
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Filings from the "Filing" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Filings
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Filing

  // async update(Filing) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Filing by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = FilingRepository;
