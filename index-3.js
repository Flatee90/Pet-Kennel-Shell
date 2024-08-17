function createPet(nameInput, speciesInput, happinessInput, energyInput){
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: energyInput,
        
        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 20;
            this.happiness += 10;
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
        }
    }
    return pet;
};
let pet = createPet("Honey", "Dog", 100, 100);
let pet2 = createPet("Choppy", "Lizard", 70, 100);
let pet3 = createPet("Buster", "Pig", 100, 100);
let kennel = [];
kennel.push(pet);
kennel.push(pet2);
kennel[kennel.length] = pet3
console.log(kennel);
kennel.forEach(pet => pet.rest());
console.log(kennel);
kennel[0].play()