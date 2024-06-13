const AbstractSeeder = require("./AbstractSeeder");

class ExpTrainingSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "exp_training",
      truncate: true,
    });
  }

  run() {
    for (let i = 0; i < 5; i += 1) {
      const fakeExpTraining = {
        training: this.faker.name.jobTitle(),
        activity: this.faker.name.jobType(),
        diplome: this.faker.lorem.words(2),
        number_years_exp: this.faker.random
          .number({ min: 1, max: 20 })
          .toString(),
      };

      this.insert(fakeExpTraining); // insert into exp_training(training, activity, diplome, number_years_exp) values (?, ?, ?, ?)
    }
  }
}

module.exports = ExpTrainingSeeder;
