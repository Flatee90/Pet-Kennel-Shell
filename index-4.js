console.log("test");
let dogKennel = []
function createDogKennel(numDogs, nameInput, speciesInput, happinessInput, energyInput) {
    for (let i = 0; i < numDogs; i++) {
        let petDog = {
            name: nameInput + i,
            species: speciesInput,
            happiness: happinessInput,
            energy: energyInput,

            status() {
                console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
            },
            play() {
                this.energy -= Math.floor(Math.random() * 30) + 10; // Random energy decrease between 10 and 40
                this.happiness += Math.floor(Math.random() * 20) + 5; // Random happiness increase between 5 and 25
                console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
            },
            feed() {
                this.energy += 20;
                this.happiness += 20;
                console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
            },
            rest() {
                this.energy = 100;
                console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
            },
            randomEvent() {
                this.energy += Math.floor(Math.random() * 20) - 10; // Random energy change between -10 and +10
                this.happiness += Math.floor(Math.random() * 20) - 10; // Random happiness change between -10 and +10
                console.log(`Random event for ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
            }
        };
        dogKennel.push(petDog);
    }
    return dogKennel;
}
let dogKennel1 = createDogKennel(1,"Honey", "Dog", 100, 100);
let dogKennel2 = createDogKennel(1, "Choppy", "Dog", 100, 100);
let dogKennel3 = createDogKennel(1, "Buster", "Dog", 100, 100);
let dogKennel4 = createDogKennel(1, "Roscoe", "Dog", 100, 100);
let dogKennel5 = createDogKennel(1, "Fluffy", "Dog", 100, 100);
// Dog function calls
//Kennel1
console.log(dogKennel1); dogKennel1[0].play(); dogKennel1[0].status(); dogKennel1[0].feed(); 
dogKennel1[0].status(); dogKennel1[0].rest(); dogKennel1[0].status(); dogKennel1[0].randomEvent(); 
//kennel2
console.log(dogKennel2); dogKennel2[0].play(); dogKennel2[0].status(); dogKennel2[0].feed(); 
dogKennel2[0].status(); dogKennel2[0].rest(); dogKennel2[0].status(); dogKennel2[0].randomEvent();
//kennel3
console.log(dogKennel3); dogKennel3[0].play(); dogKennel3[0].status(); dogKennel3[0].feed(); 
dogKennel3[0].status(); dogKennel3[0].rest(); dogKennel3[0].status(); dogKennel3[0].randomEvent();
//kennel4
console.log(dogKennel4); dogKennel4[0].play(); dogKennel4[0].status(); dogKennel4[0].feed(); 
dogKennel4[0].status(); dogKennel4[0].rest(); dogKennel4[0].status(); dogKennel4[0].randomEvent();
//kennel5
console.log(dogKennel5); dogKennel5[0].play(); dogKennel5[0].status(); dogKennel5[0].feed(); 
dogKennel5[0].status(); dogKennel5[0].rest(); dogKennel5[0].status(); dogKennel5[0].randomEvent();
//all kennels
dogKennel.forEach(dog => dog.status());