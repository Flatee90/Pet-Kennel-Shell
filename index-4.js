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
let dogKennel2 = createDogKennel(1, "Buster", "Dog", 100, 100);
let dogKennel3 = createDogKennel(1, "Choppy", "Dog", 100, 100);
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

//cat function
let catKennel = []
function createCatKennel(numDogs, nameInput, speciesInput, happinessInput, energyInput) {
    for (let i = 0; i < numDogs; i++) {
        let petCat = {
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
        catKennel.push(petCat);
    }
    return catKennel;
}
let catKennel1 = createCatKennel(1, "Mittens", "Cat", 50, 100);
let catKennel2 = createCatKennel(1, "Sushi", "Cat", 50, 100);
let catKennel3 = createCatKennel(1, "Nutmeg", "Cat", 50, 100);
let catKennel4 = createCatKennel(1, "Peter Griffin", "Cat", 50, 100);
let catKennel5 = createCatKennel(1, "Gambit", "Cat", 50, 100);
// Cat function calls 
//Kennel1
console.log(catKennel1); catKennel1[0].play(); catKennel1[0].status(); catKennel1[0].feed(); 
catKennel1[0].status(); catKennel1[0].rest(); catKennel1[0].status(); catKennel1[0].randomEvent(); 
//kennel2
console.log(catKennel2); catKennel2[0].play(); catKennel2[0].status(); catKennel2[0].feed(); 
catKennel2[0].status(); catKennel2[0].rest(); catKennel2[0].status(); catKennel2[0].randomEvent();
//kennel3
console.log(catKennel3); catKennel3[0].play(); catKennel3[0].status(); catKennel3[0].feed(); 
catKennel3[0].status(); catKennel3[0].rest(); catKennel3[0].status(); catKennel3[0].randomEvent();
//kennel4
console.log(catKennel4); catKennel4[0].play(); catKennel4[0].status(); catKennel4[0].feed(); 
catKennel4[0].status(); catKennel4[0].rest(); catKennel4[0].status(); catKennel4[0].randomEvent();
//kennel5
console.log(catKennel5); catKennel5[0].play(); catKennel5[0].status(); catKennel5[0].feed(); 
catKennel5[0].status(); catKennel5[0].rest(); catKennel5[0].status(); catKennel5[0].randomEvent();
//all kennels
catKennel.forEach(cat => cat.status());

//fish function
let fishTank = []
function createFishTank(numDogs, nameInput, speciesInput, happinessInput, energyInput) {
    for (let i = 0; i < numDogs; i++) {
        let petFish = {
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
        fishTank.push(petFish);
    }
    return fishTank;
}
let fishTank1 = createFishTank(1, "Nemo", "Fish", 50, 100);
let fishTank2 = createFishTank(1, "Goldie", "Fish", 50, 100);
let fishTank3 = createFishTank(1, "Garfield", "Fish", 50, 100);
let fishTank4 = createFishTank(1, "Indigo", "Fish", 50, 100);
let fishTank5 = createFishTank(1, "Eddie", "Fish", 50, 100);
//tank1
console.log(fishTank1); fishTank1[0].play(); fishTank1[0].status(); fishTank1[0].feed(); 
fishTank1[0].status(); fishTank[0].rest(); fishTank1[0].status(); fishTank1[0].randomEvent(); 
//tank2
console.log(fishTank2); fishTank2[0].play(); fishTank2[0].status(); fishTank2[0].feed(); 
fishTank2[0].status(); fishTank[0].rest(); fishTank2[0].status(); fishTank2[0].randomEvent();
//tank3
console.log(fishTank3); fishTank3[0].play(); fishTank3[0].status(); fishTank3[0].feed(); 
fishTank3[0].status(); fishTank[0].rest(); fishTank3[0].status(); fishTank3[0].randomEvent();
//tank4
console.log(fishTank4); fishTank4[0].play(); fishTank4[0].status(); fishTank4[0].feed(); 
fishTank4[0].status(); fishTank[0].rest(); fishTank4[0].status(); fishTank4[0].randomEvent();
//tank5
console.log(fishTank5); fishTank5[0].play(); fishTank5[0].status(); fishTank5[0].feed(); 
fishTank5[0].status(); fishTank[0].rest(); fishTank5[0].status(); fishTank5[0].randomEvent();
//all tanks
fishTank.forEach(fish => fish.status());