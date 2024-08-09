/* 
    Javascript is designed as a simple object based paradigm
    An object is a collection of properties, properties is an association of key and value
    Value can be function, which means known as method

    Object initializers are also called object literals.
    "Object initializer" is consistent with the terminology used by C++.

    const person={
        property1: value1, // identifier
        2: value2,  // Number
        "property 3": value3 // String
    }


    let x;
    if(condition) {
        x: {
            greeting: " Hi how are you"
        };
    }

    For the above one , if the condition is true, object properties is assigned to variable x

USING A CONSTRUCTOR OBJECT:-

function Car(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
} 

const myCar = new Car("Eagle", "Talon TSi", 1993);
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);


function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");


Rewrite the Car Function below: 
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);


BY USING OBJECT CREATE 
const Animal= {
    type: "Invertebrates",
    displayType() {
        console.log(this.type);
    },
};

const animal1=object.create(Animal);
animal1.displayType();




*/