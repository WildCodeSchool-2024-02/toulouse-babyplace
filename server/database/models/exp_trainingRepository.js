const AbstractRepository = require("./AbstractRepository");

class expTrainingRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "children" as configuration
    super({ table: "exp_training" });
  }

  // The C of CRUD - Create operation

  async create(training) {
    // Execute the SQL INSERT query to add a new training to the "training" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [training.title, training.user_id]
    );

    // Return the ID of the newly inserted training
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific training by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the training
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "training" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing training

  // async update(training) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an training by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = expTrainingRepository;
