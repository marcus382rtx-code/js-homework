const users = [
    { name: "Андрій", email: "andriy@gmail.com", age: 20 },
    { name: "Марія", email: "maria@gmail.com", age: 22 },
    { name: "Іван", email: "ivan@gmail.com", age: 19 }
];

for (const { name, email, age } of users) {
    console.log("Ім'я: " + name + ", пошта: " + email + ", вік: " + age);
}
