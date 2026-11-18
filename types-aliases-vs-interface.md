## The differences between type aliases and interface in TypeScript. When should we choose one over the other?

TypeScript is a statically typed superset of JavaScript that enhances code reliability and maintainability by introducing types.
There are two ways to define custom types in TypeScript, these are: **Type Aliases**
and **Interfaces**. Both help us describe data structures and make our
code more predictable. They seems similar but they have some important differences.

## 1. Type Aliases

We use the `type` keyword to create a type alias. It can define object
shapes, union types, primitive types, intersections, tuples, or complex combinations.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

## 2. Interfaces

We use the `interface` keyword to define the structure of an object or class. It fits naturally into object-oriented programming,supporting inheritance and declaration merging.

```ts
interface User {
  name: string;
  age: number;
}
```

## 3. Key Differences

- **Flexibility in Type Definitions:** Type aliases can represent primitives, unions, intersections, tuples, mapped types, and conditional types. Interfaces are limited to describing object shapes or class contracts.

```ts
type Id = string | number; // Union
type Status = "active" | "inactive"; // Literal
type Coordinates = [number, number]; // Tuple
type User = { name: string } & { age: number }; // Intersection

interface User {
  name: string;
  age: number;
  isMarried: boolean;
}
```

- **Declaration Merging:** Interfaces support declaration merging;
  type aliases do not merge don’t merge, we have to use intersections.

```ts
// Declaration merging
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = { name: "Romel", age: 39 };

// Extends
interface Manager extends User {
  role: string;
}
// using intersections
type User = { name: string; age: string };
type Manager = User & { role: string };

const manager: Manager = { name: "Romel", role: "manager" };
```

## 4. When Should We Choose One?

We will choose **interfaces** for object structures, class contracts,
declaration merging and inheritance with **extends** is required.

We will choose **type aliases** for unions, intersections, primitives, tuples,
and complex type combinations.

## Conclusion

Both **type aliases** and **interfaces** are powerful and useful tools in TypeScript in TypeScript. We should understand their differences and use whichever makes our code cleaner and easier to maintain.
