interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
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

type Criteria<T> = Partial<Omit<T, "type">>;

export function filterPersons<T extends Person>(
  persons: Person[],
  personType: T["type"],
  criteria: Criteria<T>
): T[] {
  return persons
    .filter((person): person is T => person.type === personType) // Type Guard
    .filter((person) =>
      Object.keys(criteria).every(
        (fieldName) =>
          person[fieldName as keyof T] === criteria[fieldName as keyof T]
      )
    );
}

// Usage examples
const usersByAge25 = filterPersons(persons, "user", { age: 25 });
console.log("Users of age 25:", usersByAge25);

const adminsByAge18 = filterPersons(persons, "admin", { age: 18 });
console.log("Admins of age 18:", adminsByAge18);
