// Import database client
const database = require("../client");

// Provide database access through AbstractRepository class
class AbstractRepository {
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
  constructor({ table }) {
    // thx https://www.codeheroes.fr/2017/11/08/js-classes-abstraites-et-interfaces/
    if (this.constructor === AbstractRepository) {
      throw new TypeError(
        "Abstract class 'AbstractRepository' cannot be instantiated directly"
      );
    }

    // Store the table name
    this.table = table;

    // Provide access to the database client
    this.database = database;
  }
}

// Ready to export
module.exports = AbstractRepository;
