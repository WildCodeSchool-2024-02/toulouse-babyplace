const AbstractRepository = require("./AbstractRepository");

class ExpTrainingRepository extends AbstractRepository {
  constructor() {
    super({ table: "exp_training" });
  }

  async create(ExpTraining) {
    // Execute the SQL INSERT query to add a new ExpTraining to the "ExpTraining" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [ExpTraining.title, ExpTraining.user_id]
    );

    return result.insertId;
  }
}

module.exports = ExpTrainingRepository;
