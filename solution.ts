// Probelem 1:

const filterEvenNumbers = (arr: number[]): number[] => {
    return arr
        .map((num): number | null => num % 2 === 0 ? num : null)
        .filter((num): num is number => num !== null);
};


// Problem 2:

const reverseString = (str: string): string => {
    return str
        .split('')
        .map((_, index, arr) => arr[arr.length - 1 - index])
        .join('');
};


// problem 3:
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
    return typeof value === 'string' ? 'String' : 'Number';
};


// Problem 4:

const getProperty = <T>(obj: T, key: keyof T) => {
    return obj[key];
};


// problem 5:

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return {
        ...book,
        isRead: true
    };
};



// Problem 6:

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// Problem 7:

class ArrayOperations {
    private arr1: number[];
    private arr2: number[];

    constructor(arr1: number[], arr2: number[]) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }

    public getIntersection(): number[] {
        const result: number[] = [];

        for (let num of this.arr1) {
            if (this.arr2.includes(num)) {
                result.push(num);
            }
        }
        return result;
    }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    const operations = new ArrayOperations(arr1, arr2);
    return operations.getIntersection();
};


