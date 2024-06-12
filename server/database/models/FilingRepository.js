const AbstractRepository = require("./AbstractRepository");

class FilingRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "filing" });
  }

  // The C of CRUD - Create operation

  async create(Filing) {
    // Execute the SQL INSERT query to add a new Filing to the "Filing" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Filing.title, Filing.user_id]
    );

    // Return the ID of the newly inserted Filing
    return result.insertId;
  }
}

module.exports = FilingRepository;
