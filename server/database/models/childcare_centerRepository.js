const AbstractRepository = require("./AbstractRepository");

class childcareCenterRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "childcareCenter" as configuration
    super({ table: "childcareCenter" });
  }

  // The C of CRUD - Create operation

  async create(childcareCenter) {
    // Execute the SQL INSERT query to add a new childcareCenter to the "childcareCenter" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [childcareCenter.title, childcareCenter.user_id]
    );

    // Return the ID of the newly inserted childcareCenter
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific childcareCenter by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the childcareCenter
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "childcareCenter" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing childcareCenter

  // async update(childcareCenter) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an childcareCenter by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = childcareCenterRepository;
