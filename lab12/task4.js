const person = {
    firstName: "Олена",
    lastName: "Шевчук",
    age: 25
};

person.email = "olena.shevchuk@gmail.com";
delete person.age;

console.log(person);
