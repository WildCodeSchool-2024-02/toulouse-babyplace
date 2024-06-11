const AbstractRepository = require("./AbstractRepository");

class ExpTrainingRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "exp_training" });
  }

  // The C of CRUD - Create operation

  async create(ExpTraining) {
    // Execute the SQL INSERT query to add a new ExpTraining to the "ExpTraining" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [ExpTraining.title, ExpTraining.user_id]
    );

    // Return the ID of the newly inserted ExpTraining
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific ExpTraining by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the ExpTraining
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ExpTrainings from the "ExpTraining" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of ExpTrainings
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing ExpTraining

  // async update(ExpTraining) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an ExpTraining by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ExpTrainingRepository;
