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
        adress: this.faker.location.city(),
        mail: this.faker.internet.email(),
        url: Buffer.from(this.faker.internet.url()),
        types: this.faker.lorem.word(),
        refName: `childcare_center_${i}`,
      };

      this.insert(fakeChildcareCenter); // insert into childcare_center(name, description, phone, address, mail, url, types) values (?, ?, ?, ?, ?, ?, ?)
    }
  }
}

module.exports = ChildcareCenterSeeder;
