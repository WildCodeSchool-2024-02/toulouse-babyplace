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
}

module.exports = ChildrenRepository;
