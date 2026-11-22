// Class 1: parent, with encapsulated data
class Account {
  // Private field: can't be accessed from outside the class
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Method 1: the only controlled way to read the balance
  getBalance() {
    return this.#balance;
  }
}

// Class 2: child, inherits from Account
class SavingsAccount extends Account {
  constructor(owner, balance, interestRate) {
    super(owner, balance); // reuses the parent's constructor
    this.interestRate = interestRate;
  }

  // Method 2: uses the inherited getBalance() because the child can't touch #balance directly
  projectedBalance() {
    return this.getBalance() * (1 + this.interestRate);
  }
}

const savings = new SavingsAccount("Maria", 1000, 0.05);

console.log(savings.owner);              // Maria
console.log(savings.getBalance());       // 1000
console.log(savings.projectedBalance()); // 1050
// console.log(savings.#balance);        // SyntaxError: private field