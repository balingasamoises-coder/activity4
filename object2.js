// 2 object literals
const basePerson = { name: "Maria", age: 20 };
const contactInfo = { email: "maria@example.com", city: "Calbayog" };

// Spread operator on objects: merge both into a new object
const profile = { ...basePerson, ...contactInfo };
// { name: "Maria", age: 20, email: "maria@example.com", city: "Calbayog" }

// 2 arrow functions
const describe = (person) => person.name + " is " + person.age + " years old.";
const withBirthday = (person) => ({ ...person, age: person.age + 1 });

console.log(describe(profile));                // Maria is 20 years old.
console.log(withBirthday(profile).age);        // 21
console.log(profile.age);                      // 20 (original is unchanged)