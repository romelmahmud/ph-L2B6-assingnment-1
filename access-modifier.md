## How Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples?

Access Modifiers are an important part of Object-Oriented Programming (OOP), they help up protecting data by controlling how class properties and methods can be accessed. TypeScript provides four commonly used access modifiers: `public`, `private`, `protected`, and `readonly`.

## 1. Public

**Public** is default access modifier in TypeScript. It allows properties and methods to be accessed from anywhere, including inside the class, outside the class, or from derived classes.

```ts
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person = new Person("Romel");
console.log(person.name); // Accessible
person.greet(); // Accessible
```

## 2. Private

Properties and methods which declare **Private** are only accessible within the class they are declared. They cannot be accessed from outside the class or from derived classes.

```ts
class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }
  public showAge() {
    console.log(`Person age is ${this.age}`);
  }
}
const person = new Person(39);
console.log(person.age); // Not Accessible.
person.showAge(); // Accessible
```

## 3. Protected

**Protected** are can be accessed within the class and also in derived classes but they cannot be accessed from outside the class.

```ts
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  public getName() {
    return this.name; // Accessible in derived class
  }
}
const employee = new Employee('Romel');
console.log(employee.getName()); // Works fine
console.log(employee.name); /
```

## 3. Readonly

The **Readonly** modifier allows us to assign a value when declaring a property or inside the constructor. After initialization, we cannot change its value.

```ts
class User {
  readonly id: number = 101;
}

const user = new User();
console.log(user.id); // 101

// user.id = 102; // Error
```

## Conclusion

**Access modifiers** help us control data access and improve code security and maintainability. Understanding these modifiers helps us write cleaner and more maintainable TypeScript applications.
