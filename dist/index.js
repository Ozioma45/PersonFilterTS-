"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPersons = exports.persons = void 0;
exports.persons = [
    {
        type: "user",
        name: "Paul Schwarzmüller",
        age: 25,
        occupation: "Clothing owner",
    },
    { type: "admin", name: "Alex Smith", age: 18, role: "Administrator" },
    { type: "user", name: "Alice Miles", age: 30, occupation: "Accountant" },
    { type: "admin", name: "Steve Miller", age: 40, role: "Head Admin" },
    { type: "user", name: "Victor M.", age: 20, occupation: "Tailor" },
    { type: "admin", name: "Alex", age: 28, role: "Civil Engineer" },
];
function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType) // Type Guard
        .filter((person) => Object.keys(criteria).every((fieldName) => person[fieldName] === criteria[fieldName]));
}
exports.filterPersons = filterPersons;
// Usage examples
const usersByAge25 = filterPersons(exports.persons, "user", { age: 25 });
console.log("Users of age 25:", usersByAge25);
const adminsByAge18 = filterPersons(exports.persons, "admin", { age: 18 });
console.log("Admins of age 18:", adminsByAge18);
