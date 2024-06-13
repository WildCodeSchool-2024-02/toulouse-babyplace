const AbstractRepository = require("./AbstractRepository");

class FilingRepository extends AbstractRepository {
  constructor() {
    super({ table: "filing" });
  }

  async create(Filing) {
    // Execute the SQL INSERT query to add a new Filing to the "Filing" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Filing.title, Filing.user_id]
    );

    return result.insertId;
  }
}

module.exports = FilingRepository;
