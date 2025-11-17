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

const getLength = (input: string | unknown[]): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  }
  if (Array.isArray(input)) {
    return input.length;
  }
};

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

type Item = { title: string; rating: number };

const filterByRating = (items: Item[]): Item[] => {
  return items.filter(
    (item) =>
      typeof item.rating === "number" &&
      item.rating >= 0 &&
      item.rating <= 5 &&
      item.rating >= 4
  );
};

type User = { id: number; name: string; email: string; isActive: boolean };

const filterActiveUsers = (users: User[]): User[] | [] => {
  return users.filter((user) => user.isActive === true);
};

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

type numberOrString = number | string;

const getUniqueValues = (
  arr1: numberOrString[],
  arr2: numberOrString[]
): numberOrString[] => {
  const tempArr: numberOrString[] = [];
  for (let i = 0; i < arr1.length; i++) tempArr.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) tempArr.push(arr2[i]);

  const unique: numberOrString[] = [];

  for (let i = 0; i < tempArr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (tempArr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      unique.push(tempArr[i]);
    }
  }

  return unique;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    let discount = product.discount ?? 0;
    if (discount < 0) discount = 0;
    if (discount > 100) discount = 100;
    const discountedPrice = product.price - (product.price * discount) / 100;
    return total + discountedPrice * product.quantity;
  }, 0);
};
