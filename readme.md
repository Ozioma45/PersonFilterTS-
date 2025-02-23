### **FilterPersons - TypeScript Filtering Utility**

A TypeScript utility that filters users and admins based on specific criteria while ensuring strict type safety.

## 🚀 **Overview**

This project provides a strongly typed `filterPersons` function that:

- Returns `User[]` when filtering for `user`.
- Returns `Admin[]` when filtering for `admin`.
- Allows filtering based on partial criteria but prevents filtering by the `type` property.

## 🛠 **Tech Stack**

- **TypeScript**: Ensures type safety and robust filtering logic.

## 📌 **Features**

- Filters `users` and `admins` separately.
- Enforces correct typings based on the `personType`.
- Prevents incorrect filtering by excluding the `type` field.
- Uses generics and utility types for flexibility.

## 🔧 **Setup**

1. Clone the repository:

   ```sh
   git clone https://github.com/Ozioma45/PersonFilterTS-.git
   cd filter-persons
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Compile TypeScript:

   ```sh
   npx tsc
   ```

4. Run the project:
   ```sh
   node dist/index.js
   ```

## 📝 **Usage Example**

```typescript
const users: User[] = [
  { type: "user", name: "John Doe", age: 25, occupation: "Designer" },
  { type: "user", name: "Jane Smith", age: 30, occupation: "Developer" },
];

const filteredUsers = filterPersons(users, "user", { age: 25 });
console.log(filteredUsers);
```

## 🎯 **Contributing**

Feel free to submit pull requests or report issues. To contribute:

1. Fork the repository.
2. Create a new branch (`feature-new-filter`).
3. Commit changes with clear messages.
4. Push and open a PR.

## ⚖ **License**

This project is licensed under the **MIT License**.

---
