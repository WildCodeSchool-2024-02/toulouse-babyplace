const AbstractRepository = require("./AbstractRepository");

class FilingRepository extends AbstractRepository {
  constructor() {
    super({ table: "filing" });
  }

  async create(filing) {
    // Execute the SQL INSERT query to add a new Filing to the "Filing" table
    const [result] = await this.database.query(
      `insert into ${this.table} (filing) values (?)`,
      [filing.filing]
    );

    return result.insertId;
  }
}

module.exports = FilingRepository;
