const AbstractSeeder = require("./AbstractSeeder");
const CustomerSeeder = require("./CustomerSeeder");
const ChildcareCenterSeeder = require("./ChildcareCenterSeeder");

class ChildrenSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "children",
      truncate: true,
      dependencies: [CustomerSeeder, ChildcareCenterSeeder],
    });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeChild = {
        name: this.faker.name.lastName(),
        first_name: this.faker.name.firstName(),
        allergies: this.faker.lorem.sentence(),
        vaccinated: this.faker.random.boolean(),
        customer_id: this.getRef("customer").getRandomRow().id,
        childcare_center_id: this.getRef("childcare_center").getRandomRow().id,
      };

      this.insert(fakeChild); // insert into children(name, first_name, allergies, vaccinated, customer_id, childcare_center_id) values (?, ?, ?, ?, ?, ?)
    }
  }
}

module.exports = ChildrenSeeder;
