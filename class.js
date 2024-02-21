class SpaceShutt{
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShutt('Earth');
console.log(zeuz.targetPlanet);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Membuat objek menggunakan class
const person1 = new Person('John', 30);
const person2 = new Person('Alice', 25);

// Memanggil metode pada objek
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.

