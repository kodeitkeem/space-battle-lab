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
      while (this.hull != 0 && alienShip1.hull != 0) {
        if (shot < this.accuracy) {
          alienShip1.hull -= this.firepower;
          if (alienShip1.hull > 0) {
            // alien fires
            this.hull -= alienShip1.firepower; 
            console.log();
          } 

        //     else if (alienShip1.hull === 0) {
        //     //alien ship destroyed
        //     console.log('You destroyed the ship');
        // } else if (this.hull === 0) {
        //   console.log('You are dead');
        // } 
      
        }
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
console.log(USSAssembly.hull);
