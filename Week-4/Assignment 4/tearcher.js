/*----------using class -------------*/
// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class teacher extends person {
//   super();
//   teach(subject) {

//     console.log(`My name ${this.name} and I am teachin ${subject}`);
//   }
// }

// person.prototype.name = "Sanj";
// const teachs = new teacher();

// console.log(teachs.teach("abc"));

/*----------------Using prototype-----------------*/
const person = function () {};

person.prototype.constru = (name, age) => {
  this.name = name;
  this.age = age;
};

const teachers = function () {};

Object.setPrototypeOf(teachers.prototype, person.prototype);

teachers.prototype.teach = (subject) => {
  console.log(`My name ${this.name} and I am teaching ${subject}`);
};

const tearche = new teachers();
tearche.constru("sachin", 23);
tearche.teach("Protytype");
