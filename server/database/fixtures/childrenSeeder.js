const AbstractSeeder = require("./AbstractSeeder");
const CustomerSeeder = require("./CustomerSeeder");
const ChildcareCenterSeeder = require("./ChildcareCenterSeeder");

class ChildrenSeeder extends AbstractSeeder {
  constructor() {
    // Appelez le constructeur de la classe parente (AbstractSeeder) avec les options appropriées
    super({
      table: "children",
      truncate: true,
      dependencies: [CustomerSeeder, ChildcareCenterSeeder],
    });
  }

  // La méthode run - Peuple la table 'children' avec des données factices
  run() {
    // Générez et insérez des données factices dans la table 'children'
    for (let i = 0; i < 5; i += 1) {
      // Générez des données factices pour les enfants
      const fakeChild = {
        name: this.faker.name.lastName(), // Génère un nom de famille fictif
        first_name: this.faker.name.firstName(), // Génère un prénom fictif
        allergies: this.faker.lorem.sentence(), // Génère des allergies fictives
        vaccinated: this.faker.random.boolean(), // Génère une valeur booléenne aléatoire pour la vaccination
        customer_id: this.getRef("customer").getRandomRow().id, // Obtenez l'ID client aléatoire à partir du CustomerSeeder
        childcare_center_id: this.getRef("childcare_center").getRandomRow().id, // Obtenez l'ID du centre de garde aléatoire à partir du ChildcareCenterSeeder
      };

      // Insérez les données fictives de l'enfant dans la table 'children'
      this.insert(fakeChild); // insert into children(name, first_name, allergies, vaccinated, customer_id, childcare_center_id) values (?, ?, ?, ?, ?, ?)
    }
  }
}

// Exportez la classe ChildSeeder
module.exports = ChildrenSeeder;
