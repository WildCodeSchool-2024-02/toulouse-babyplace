const AbstractSeeder = require("./AbstractSeeder");

class CustomerSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "customers", truncate: true });
  }

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      const fakeCustomer = {
        name: this.faker.name.findName(),
        refName: `customer_${i}`,
        address: this.faker.address.streetAddress(),
        phone: this.faker.phone.phoneNumber(),
      };
      this.insert(fakeCustomer);
    }
  }
}

module.exports = CustomerSeeder;
