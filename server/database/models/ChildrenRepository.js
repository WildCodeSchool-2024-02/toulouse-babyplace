const AbstractRepository = require("./AbstractRepository");

class ChildrenRepository extends AbstractRepository {
  constructor() {
    super({ table: "children" });
  }

  async create(children) {
    // Execute the SQL INSERT query to add a new children to the "children" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, first_name, allergies, vaccinated, customer_id, childcare_center_id) values (?, ?, ?, ?, ?, ?)`,
      [
        children.name,
        children.first_name,
        children.allergies,
        children.vaccinated,
        children.customer_id,
        children.childcare_center_id,
      ]
    );

    return result.insertId;
  }
}

module.exports = ChildrenRepository;
