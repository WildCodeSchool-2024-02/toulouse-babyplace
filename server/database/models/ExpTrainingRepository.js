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
}

module.exports = ExpTrainingRepository;
