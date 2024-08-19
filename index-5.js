console.log("test")
function createPet(nameInput, speciesInput, happinessInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: Math.floor(Math.random() * 51), // random energy between 0 and 50

        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        },
        feed() {
            if (this.energy < 30) {
                this.energy += 20;
                this.happiness += 20;
                console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
            } else {
                console.log(`${this.name} is not hungry. Energy is still ${this.energy}.`);
            }
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
        }
    }
    return pet;
}
let pet1 = createPet("Honey", "Dog", 10, 100);
let pet2 = createPet("Buster", "Dog", 50, 100);
let pet3 = createPet("Choppy", "Dog", 100, 100);
let pet4 = createPet("Roscoe", "Dog", 20, 100);
let pet5 = createPet("Fluffy", "Dog", 100, 100);
console.log(pet1)

let pets = [];
pets.push(createPet("Honey", "Dog", 10));
pets.push(createPet("Buster", "Dog", 50));
pets.push(createPet("Choppy", "Dog", 100));
pets.push(createPet("Roscoe", "Dog", 20));
pets.push(createPet("Fluffy", "Dog", 100));

console.log(pets);

for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    console.log(i);
    console.log(pet.name);
}

pet1.play(); pet1.play(); pet1.play(); pet2.play(); pet2.play(); pet1.status(); pet3.play(); pet2.status();
pet1.feed(); pet1.feed(); pet1.feed(); pet1.feed(); pet1.feed(); pet2.feed(); pet1.status(); pet2.feed();
pet2.feed(); pet2.status(); pet3.feed(); pet3.feed(); pet3.status(); pet3.feed(); pet3.feed(); pet3.status();
pet4.play(); pet1.rest(); pet2.rest(); pet3.rest(); pet4.feed(); pet4.feed(); pet4.status(); pet5.play();
pet5.play(); pet4.rest(); pet4.status(); pet5.feed(); pet5.feed(); pet5.feed(); pet5.feed(); pet5.status();
pet5.rest(); pet5.status();

function createPet(nameInput, speciesInput, happinessInput) {
    let petCat = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: Math.floor(Math.random() * 51), // random energy between 0 and 50

        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        },
        feed() {
            if (this.energy < 30) {
                this.energy += 20;
                this.happiness += 20;
                console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
            } else {
                console.log(`${this.name} is not hungry. Energy is still ${this.energy}.`);
            }
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
        }
    }
    return petCat;
}
let petCat1 = createPet("Mittens", "cat", 10, 100);
let petCat2 = createPet("Sushi", "cat", 50, 100);
let petCat3 = createPet("Nutmeg", "cat", 100, 100);
let petCat4 = createPet("Peter Griffin", "cat", 20, 100);
let petCat5 = createPet("Gambit", "cat", 100, 100);
console.log(petCat1)


let petsCat = [];
petsCat.push(createPet("Mittens", "cat", 10));
petsCat.push(createPet("Sushi", "cat", 50));
petsCat.push(createPet("Nutmeg", "cat", 100));
petsCat.push(createPet("Peter Griffin", "cat", 20));
petsCat.push(createPet("Gambit", "cat", 100));


console.log(petsCat);


for (let i = 0; i < petsCat.length; i++) {
    let petCat = petsCat[i];
    console.log(i);
    console.log(petCat.name);
}


petCat1.play(); petCat1.play(); petCat1.play(); petCat2.play(); petCat2.play(); petCat1.status(); petCat3.play(); petCat2.status();
petCat1.feed(); petCat1.feed(); petCat1.feed(); petCat1.feed(); petCat1.feed(); petCat2.feed(); petCat1.status(); petCat2.feed();
petCat2.feed(); petCat2.status(); petCat3.feed(); petCat3.feed(); petCat3.status(); petCat3.feed(); petCat3.feed(); petCat3.status();
petCat4.play(); petCat1.rest(); petCat2.rest(); petCat3.rest(); petCat4.feed(); petCat4.feed(); petCat4.status(); petCat5.play();
petCat5.play(); petCat4.rest(); petCat4.status(); petCat5.feed(); petCat5.feed(); petCat5.feed(); petCat5.feed(); petCat5.status();
petCat5.rest(); petCat5.status();



function createPet(nameInput, speciesInput, happinessInput) {
    let petFish = {
        name: nameInput,
        species: speciesInput,
        happiness: happinessInput,
        energy: Math.floor(Math.random() * 51), // random energy between 0 and 50

        status() {
            console.log(`Pet name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
        },
        feed() {
            if (this.energy < 30) {
                this.energy += 20;
                this.happiness += 20;
                console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
            } else {
                console.log(`${this.name} is not hungry. Energy is still ${this.energy}.`);
            }
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
        }
    }
    return petFish;
}
let petFish1 = createPet("Nemo", "fish", 10, 100);
let petFish2 = createPet("Goldie", "fish", 50, 100);
let petFish3 = createPet("Eddie", "fish", 100, 100);
let petFish4 = createPet("Garfield", "fish", 20, 100);
let petFish5 = createPet("Indigo", "fish", 100, 100);
console.log(petFish1)


let petsFish = [];
petsFish.push(createPet("Nemo", "fish", 10));
petsFish.push(createPet("Goldie", "fish", 50));
petsFish.push(createPet("Eddie", "fish", 100));
petsFish.push(createPet("Garfield", "fish", 20));
petsFish.push(createPet("Indigo", "fish", 100));

console.log(petsFish);

for (let i = 0; i < pets.length; i++) {
    let petFish = petsFish[i];
    console.log(i);
    console.log(petFish.name);
}

petFish1.play(); petFish1.play(); petFish1.play(); petFish2.play(); petFish2.play(); petFish1.status(); petFish3.play(); petFish2.status();
petFish1.feed(); petFish1.feed(); petFish1.feed(); petFish1.feed(); petFish1.feed(); petFish2.feed(); petFish1.status(); petFish2.feed();
petFish2.feed(); petFish2.status(); petFish3.feed(); petFish3.feed(); petFish3.status(); petFish3.feed(); petFish3.feed(); petFish3.status();
petFish4.play(); petFish1.rest(); petFish2.rest(); petFish3.rest(); petFish4.feed(); petFish4.feed(); petFish4.status(); petFish5.play();
petFish5.play(); petFish4.rest(); petFish4.status(); petFish5.feed(); petFish5.feed(); petFish5.feed(); petFish5.feed(); petFish5.status();
petFish5.rest(); petFish5.status();
