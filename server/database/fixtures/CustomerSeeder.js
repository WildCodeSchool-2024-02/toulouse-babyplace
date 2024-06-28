const AbstractSeeder = require("./AbstractSeeder");

class CustomerSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "customer",
      truncate: true,
    });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeCustomer = {
        name: this.faker.person.lastName(),
        first_name: this.faker.person.firstName(),
        mail: this.faker.internet.email(),
        adress: this.faker.location.city(),
        phone: this.faker.phone.number(),
        refName: `customer_${i}`,
      };

      this.insert(fakeCustomer); // insert into childcare_center(name, description, phone, address, mail, url, types) values (?, ?, ?, ?, ?, ?, ?)
    }
  }
}

module.exports = CustomerSeeder;
