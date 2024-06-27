const AbstractSeeder = require("./AbstractSeeder");
const ChildcareCenterSeeder = require("./ChildcareCenterSeeder");
const CustomerSeeder = require("./HenrySeeder");

class FilingSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "filing",
      truncate: true,
      dependencies: [CustomerSeeder, ChildcareCenterSeeder],
    });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeFiling = {
        filing: this.faker.lorem.sentence(),
        customer_id: this.getRef(`customer_${i}`).insertId,
        childcare_center_id: this.getRef(`childcare_center_${i}`).insertId,
      };

      this.insert(fakeFiling); // insert into childcare_center(name, description, phone, address, mail, url, types) values (?, ?, ?, ?, ?, ?, ?)
    }
  }
}

module.exports = FilingSeeder;
