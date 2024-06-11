const AbstractRepository = require("./AbstractRepository");

class ChildcareCenterRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "childcare_center" });
  }

  // The C of CRUD - Create operation

  async create(ChildcareCenter) {
    // Execute the SQL INSERT query to add a new ChildcareCenter to the "ChildcareCenter" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [ChildcareCenter.title, ChildcareCenter.user_id]
    );

    // Return the ID of the newly inserted ChildcareCenter
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
}

module.exports = ChildcareCenterRepository;
