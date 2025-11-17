## What is the Use of Enums in TypeScript?

**enums** in TypeScript is a special type that allows defining a set of named constants. It is a feature that provides a way to create a collection of related values and assign meaningful names to them, improving code readability and maintainability and less error-prone.

### Why Use Enums?

Enums are useful when there is a **fixed set of related values** that need to be represented with descriptive names. They help in:

- **Improving readability**: Descriptive names can be used instead of magic numbers or strings.
- **Preventing errors**: TypeScript ensures that only valid enum values are used.
- **Ease of maintenance**: Updating a value in one place automatically updates all references.

---

TypeScript provides both numeric and string-based enums.

### Numeric Enums

By default, TypeScript assigns numeric values to enum members, starting from 0 and incrementing by 1 for subsequent members. We can explicitly assign numeric values to members, and subsequent members will auto-increment from that assigned value.

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

### String Enums

String enums allow assigning meaningful string values to enum members. This is useful when descriptive names are needed instead of numbers. In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: "GREEN"
```

---
