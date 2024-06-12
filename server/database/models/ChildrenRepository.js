const AbstractRepository = require("./AbstractRepository");

class ChildrenRepository extends AbstractRepository {
  constructor() {
    super({ table: "children" });
  }

  async create(Children) {
    // Execute the SQL INSERT query to add a new Children to the "Children" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [Children.title, Children.user_id]
    );

    return result.insertId;
  }
}

module.exports = ChildrenRepository;
