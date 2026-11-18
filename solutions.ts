const multiplyValues = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

const processInput = (
  value: string | number | boolean,
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean" && value === true) {
    return "Active";
  } else if (typeof value === "boolean" && value === false) {
    return "Inactive";
  }
};

const formatCoordinates = (
  coordinates: readonly [number, number, string],
): string => {
  const [latitude, longitude, location] = coordinates;
  return `Location: ${location} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(first: T[], ...arrays: NoInfer<T[][]>): T[] => {
  return [first, ...arrays].flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.students >= minStudents && course.isPublished,
  );
};

const pluckValues = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  return array.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
