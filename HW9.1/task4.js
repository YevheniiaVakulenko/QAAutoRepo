const person = {
    firstName: "Paul",
    lastName: "Pol",
    age: 30
};
console.log("Original", person);

person.email="pol@gmail.com";
console.log("With email: ", person);

delete person.age;
console.log("Without age: ",person);