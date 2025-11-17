## What is the Use of Enums in TypeScript?

TypeScript is a superset of JavaScript that adds static typing to the language. One of the powerful features TypeScript provides is **enums**. Enums allow the definition of a set of named constants, which can make code more readable, maintainable, and less error-prone.

### Why Use Enums?

Enums are useful when there is a **fixed set of related values** that need to be represented with descriptive names. They help in:

- **Improving readability**: Descriptive names can be used instead of magic numbers or strings.
- **Preventing errors**: TypeScript ensures that only valid enum values are used.
- **Ease of maintenance**: Updating a value in one place automatically updates all references.

For example, enums are helpful for representing the days of the week, user roles, or HTTP status codes. Using enums makes the code cleaner and easier to understand.

---

### Numeric Enums

By default, enums in TypeScript are numeric. The first value starts at `0` (unless specified), and each subsequent value increments by 1.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

### String Enum

String enums allow assigning meaningful string values to enum members. This is useful when descriptive names are needed instead of numbers.

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: "GREEN"
```
