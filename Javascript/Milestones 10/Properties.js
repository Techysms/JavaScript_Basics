/*
Object has properties associated with it 
Object properties are basically the same as variables

const Person={
    name: "Saroo",
    age: 21,
    sex: "Male",
}

To access these properties it having
dot notation
bracket notation

Person.name="Sarooo";
Person["name"]="Sarooo"


An object property may be an string or a symbol including empty string
object.hasOwn() is used to exclude properties from the objects


" This " Keyword is used to references of their objects 
const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone

*/ 