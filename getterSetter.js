//method khusus yang digunkana di js
//untuk mengakses dan mengubah nilai property object
//secara aman 

//getter method yang digunakan untuk mengambil
//nilai property object. 

class Person {
  constructor(name) {
    this._name = name;
  }

  // Getter untuk properti name
  get name() {
    return this._name.toUpperCase(); // Manipulasi nilai sebelum dikembalikan
  }
}

const person = new Person('John');
console.log(person.name); // Output: JOHN


//setter
//method yang digunakna untuk menetapkan nilai 
//property object. bisa untuk validasi atau operasi tambahan 

class Person {
  constructor(name) {
    this._name = name;
  }

  // Setter untuk properti name
  set name(newName) {
    if (newName.length > 2) { // Validasi panjang nama
      this._name = newName;
    } else {
      console.log('Name is too short.');
    }
  }
}

const person = new Person('John');
person.name = 'Alice'; // Setter akan dipanggil
console.log(person.name); // Output: Alice

person.name = 'Bo'; // Setter akan membatalkan perubahan karena nama terlalu pendek
console.log(person.name); // Output: Alice (nilai tidak berubah)


const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter untuk mendapatkan nama lengkap
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter untuk mengatur nama lengkap
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
};

// Mengakses properti menggunakan getter
console.log(person.fullName); // Output: John Doe

// Mengubah properti menggunakan setter
person.fullName = 'Jane Smith';

// Mengakses properti setelah diubah
console.log(person.fullName); // Output: Jane Smith
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
