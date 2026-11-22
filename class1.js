// Class 1: parent
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Method 1
  area() {
    return 0;
  }
}

// Class 2: child
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  // Method 2: overrides Shape.area()
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// Class 3: child
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  // Method 3: overrides Shape.area()
  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(3), new Rectangle(4, 5), new Shape("Generic")];

// Conditional 1
if (shapes.length > 0) {
  for (const shape of shapes) {
    const area = shape.area(); // same call, different behavior per class

    // Conditional 2
    if (area > 25) {
      console.log(shape.name + " is large: " + area.toFixed(2));
    } else {
      console.log(shape.name + " is small: " + area.toFixed(2));
    }
  }
}
// Circle is large: 28.27
// Rectangle is small: 20.00
// Generic is small: 0.00