const users = [
    { name: "John", age: 30, email: "j3@gmail.com" },
    { name: "Jane", age: 25, email: "j2@gmail.com"  },
    { name: "Mike", age: 40, email: "m4@gmail.com" }
];

for (const user of users) {
    const {name, age, email} = user;
    console.log(`${name} is ${age} years old with ${email} as email`);
}