const AbstractSeeder = require("./AbstractSeeder");

class CustomerSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "customer",
      truncate: true,
    });
  }

  async run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeCustomer = {
        name: this.faker.person.lastName(),
        firstname: this.faker.person.firstName(),
        email: this.faker.internet.email(),
        address: this.faker.location.city(),
        phone: this.faker.phone.number(),
        hashed_password:
          "$argon2id$v=19$m=19,t=2,p=1$dzVmZ3NtYjY4cDAwMDAwMA$3ZDIPrtHaKrV4g",
        refName: `customer${i}`,
      };

      this.insert(fakeCustomer);
    }
  }
}

module.exports = CustomerSeeder;
