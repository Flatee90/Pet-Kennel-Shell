function createPet(nameInput, speciesInput, happinessInput, energyInput) {
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
    };
    console.log("Created a pet...");
    pet.status();
    return pet;
}

let pet = createPet("Honey", "Dog", 100, 100);
pet.status();
console.log(pet.play());
pet.status();
console.log(pet.feed());
pet.status();
let pet2 = createPet("Choppy", "Lizard", 70, 100);
let pet3 = createPet("Buster", "Pig", 100, 100);
pet2.status();
pet3.status();
pet.rest();
pet.status();
pet2.rest();
pet2.status();
pet3.rest();
pet3.status();