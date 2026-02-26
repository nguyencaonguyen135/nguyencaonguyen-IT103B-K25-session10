//  Object  
// thuộc tính (key - tên thuộc tính : value - giá trị thuộc tính)

// Khởi tạo object 
let person = {};

let person_v2 = {
    id: 0,
    fullName: "Đạt",
    age: 19,
    sex: "Male",
};

console.log(person_v2);

// CRUD : CREATE - READ - UPDATE - DELETE

// Dot notation và Bracket notation
// Cách 1 : Dot notation
console.log(`Tên của bạn là: ${person_v2.fullName}`);

// Create 
person_v2.email = "datdz@gmail.com";

person.handle = () => {
    console.log("Xin chào các bạn");
};

console.log(person_v2.handle());

// Update
person_v2.age = 20;

// Delete 
delete person_v2["fullName"];
console.log(person_v2);

let animalDog = {
    name: "Join",
    age: 2,
};
let animalCat = {
    ...animalDog,
    age: 5,
    id: 0,
};
console.log(animalCat);

// Array object
const players = [
    {id: 0, name: "Nguyên", age: 19, goal: -1},
    {id: 1, name: "Đạt", age: 23, goal: 2},
];

// In ra các cầu thử phản lưới nhà (goal < 0)
let listPlayer = players.filter((player) => {
    return player.goal < 0;
});

listPlayer.forEach((player) => {
    console.log(`${player.name}: ${player.goal}`);
});

// Object lồng
let person_max = {
    id: 1,
    fullName: {
        firstName: "Đạt",
        lastName: "Bé Bỏng",
    };
};

// Duyệt qua object 
console.log(Object.keys(person_v2));
console.log(Object.values(animalCat));
console.log(Object.entries(person_v2));

