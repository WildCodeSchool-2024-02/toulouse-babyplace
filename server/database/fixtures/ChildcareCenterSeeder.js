const AbstractSeeder = require("./AbstractSeeder");

class ChildcareCenterSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "childcare_center",
      truncate: true,
    });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeChildcareCenter = {
        name: this.faker.company.name(),
        description: this.faker.lorem.sentence(),
        phone: this.faker.phone.number(),
        street_address: this.faker.location.streetAddress(),
        zip_code: this.faker.location.zipCode(),
        city: this.faker.location.city(),
        mail: this.faker.internet.email(),
        password: this.faker.internet.password(),
        opening: "9:00",
        closing: "17:00",
        capacity: this.faker.number.int({ max: 10 }),
        url: this.faker.internet.url({ protocol: "http" }),
        refName: `childcare_center_${i}`,
      };

      this.insert(fakeChildcareCenter); // insert into childcare_center(name, description, phone, address, mail, url, types) values (?, ?, ?, ?, ?, ?, ?)
    }
  }
}

module.exports = ChildcareCenterSeeder;
