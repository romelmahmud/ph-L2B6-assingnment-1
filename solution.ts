// Solution 1

const formatValue = (
  value: number | string | boolean
): number | string | boolean => {
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return !value;
};

// Solution 2

const getLength = (input: string | unknown[]): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  }
  if (Array.isArray(input)) {
    return input.length;
  }
};

// Solution 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// Solution 4
type Item = { title: string; rating: number };

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

// Solution 5
type User = { id: number; name: string; email: string; isActive: boolean };

const filterActiveUsers = (users: User[]): User[] | undefined => {
  return users.filter((user) => user.isActive === true);
};

// Solution 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};
