const AbstractRepository = require("./AbstractRepository");

class ChildrenRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "children" });
  }

  // The C of CRUD - Create operation

  async create(Children) {
    // Execute the SQL INSERT query to add a new Children to the "Children" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Children.title, Children.user_id]
    );

    // Return the ID of the newly inserted Children
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Children by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Children
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Childrens from the "Children" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Childrens
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Children

  // async update(Children) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Children by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ChildrenRepository;
