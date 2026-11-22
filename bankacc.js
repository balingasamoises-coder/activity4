class BankAccount {
  // Private fields: implementation details hidden from outside code
  #owner;
  #balance;

  constructor(owner, initialBalance = 0) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  // Method 1
  deposit(amount) {
    if (amount <= 0) {
      return `Invalid amount: ${amount}`; // template literal 1
    }
    this.#balance += amount;
    return `Deposited ${amount}. New balance: ${this.#balance}`; // template literal 2
  }

  // Method 2
  getSummary() {
    return `${this.#owner}'s account balance is ${this.#balance}`; // template literal 3
  }
}

const account = new BankAccount("Maria", 100);
console.log(account.deposit(50));   // Deposited 50. New balance: 150
console.log(account.deposit(-5));   // Invalid amount: -5
console.log(account.getSummary());  // Maria's account balance is 150
// console.log(account.#balance);   // SyntaxError: private field, can't be accessed directly