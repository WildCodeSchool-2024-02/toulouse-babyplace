const AbstractRepository = require("./AbstractRepository");

class ExpTrainingRepository extends AbstractRepository {
  constructor() {
    super({ table: "exp_training" });
  }

  async create(expTraining) {
    // Execute the SQL INSERT query to add a new expTraining to the "expTraining" table
    const [result] = await this.database.query(
      `insert into ${this.table} (training, activity, diplome, number_years_exp) values (?, ?, ?, ?)`,
      [
        expTraining.training,
        expTraining.activity,
        expTraining.diplome,
        expTraining.number_years_exp,
      ]
    );

    return result.insertId;
  }
}

module.exports = ExpTrainingRepository;
