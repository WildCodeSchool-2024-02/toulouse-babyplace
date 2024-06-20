const AbstractSeeder = require("./AbstractSeeder");

class ExpTrainingSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "exp_training", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeExpTraining = {
        name: this.faker.name.jobTitle(),
        description: this.faker.lorem.paragraph(),
        refName: `exp_training_${i}`,
      };
      this.insert(fakeExpTraining);
    }
  }
}

module.exports = ExpTrainingSeeder;
