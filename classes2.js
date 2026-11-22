// Class 1: parent
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Class 2: child, inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls the parent constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} the ${this.breed} barks.`; // overrides the parent method
  }
}

// 1 array
const pets = [
  new Animal("Generic Animal"),
  new Dog("Bantay", "Aspin"),
  new Dog("Rex", "Labrador"),
];

// 1 loop
for (const pet of pets) {
  console.log(pet.speak());
}
// Generic Animal makes a sound.
// Bantay the Aspin barks.
// Rex the Labrador barks.