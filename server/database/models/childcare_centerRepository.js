const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "childcare_center" });
  }

  // The C of CRUD - Create operation

  async create(ChildcareCenter) {
    // Execute the SQL INSERT query to add a new ChildcareCenter to the "ChildcareCenter" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [ChildcareCenter.title, ChildcareCenter.user_id]
    );

    // Return the ID of the newly inserted ChildcareCenter
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific ChildcareCenter by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the ChildcareCenter
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ChildcareCenters from the "ChildcareCenter" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of ChildcareCenters
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing ChildcareCenter

  // async update(ChildcareCenter) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an ChildcareCenter by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ChildcareCenterRepository;
