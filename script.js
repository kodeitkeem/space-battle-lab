// Run prompt to get user input
// Use input to call function or something similar to attack ship

let userInput = "";

const USSAssembly = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attack: function (alienShip1) {
    userInput = prompt(
      'Do you want to attack alien ship? Enter "yes" to continue'
    );
    if (userInput === "yes") {
      let shot = Math.random();
      if (shot < this.accuracy) {
        alienShip1.hull -= this.firepower;
      }
    }
  },
};

const alienShip1 = {
  hull: 10,
  firepower: Math.floor(Math.random() * 3) + 2,
  accuracy: Math.random() * (0.8 - 0.6) + 0.6,
};

USSAssembly.attack(alienShip1);
console.log(alienShip1.hull);
