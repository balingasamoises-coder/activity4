// 1 class
class Book {
  // One constructor that simulates 3 overloads
  constructor(title, author, pages) {
    if (title === undefined) {
      // Overload 1: no arguments
      this.title = "Untitled";
      this.author = "Unknown";
      this.pages = 0;
    } else if (author === undefined) {
      // Overload 2: title only
      this.title = title;
      this.author = "Unknown";
      this.pages = 0;
    } else {
      // Overload 3: title, author, and pages
      this.title = title;
      this.author = author;
      this.pages = pages ?? 0;
    }
  }

  describe() {
    return `${this.title} by ${this.author}, ${this.pages} pages`; // template literal 1
  }
}

// 3 object instances, one per overload
const book1 = new Book();
const book2 = new Book("Noli Me Tangere");
const book3 = new Book("Florante at Laura", "Francisco Balagtas", 200);

console.log(`Book 1: ${book1.describe()}`); // template literal 2
// Book 1: Untitled by Unknown, 0 pages

console.log(`Book 2: ${book2.describe()}`); // template literal 3
// Book 2: Noli Me Tangere by Unknown, 0 pages

console.log(book3.describe());
// Florante at Laura by Francisco Balagtas, 200 pages