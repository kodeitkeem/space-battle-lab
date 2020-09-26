// Run prompt to get user input
// Use input to call function or something similar to attack ship



let userInput = ''

const USSAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: function() {
        userInput = prompt('Do you want to attack alien ship?')
        if (userInput === 'yes') {
            alert(`You selected ${userInput} and the result is...`)
            
        }
    }
}

const alienShip1 = {
    hull: Math.floor(Math.random() * 4) + 3,
    firepower: Math.floor(Math.random() * 3) + 2,
    accuracy: .6 //Needs to be between .6 and .8
}

USSAssembly.attack()
console.log(userInput)







