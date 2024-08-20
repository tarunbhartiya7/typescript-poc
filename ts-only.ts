// const button = document.querySelector("button");
// const input1 = document.getElementById("num1") as HTMLInputElement; // type-casting
// const input2 = document.getElementById("num2") as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button?.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// let obj: {
//   name: string;
//   age: number;
// } = {
//   name: "sam",
//   age: 30,
// };
// console.log(typeof obj);

// const product: {
//   id: string;
//   price: number;
//   tags: (string | number | boolean)[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", 3, true],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

// enum Role {
//   ADMIN = "ADMIN",
//   USER = "USER",
// }
// console.log(Role);
// console.log(Role.ADMIN);

// function add(n1: number | string, n2: number | string) {
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2;
//   }

//   if (typeof n1 === "string" && typeof n2 === "string") {
//     n1.concat(n2);
//   }
// }

// function add(n1: number, n2: number): number {
//   return 0;
// }

// const addAnother = (n1: number, n2: number): number => 0

// type Add = (n1: number, n2: number) => number;
// const addAnother: Add = (n1, n2) => 0;

// function add(n1: number, n2: number, cb: (x: number) => void): void {
//   return cb(n1)
// }

// add(2,3, (x) => {
//   return x*2
// })

// const add = (x: number, y: number) => x + y;
// const sub: (n1: number, n2: number) => number = (x = 4, y) => x - y;

// type API = {
//   results: {
//     geometry: {
//       location: {
//         lat: number;
//         long: number;
//       };
//     };
//   }[];
// };

// axios.get<API>()

// const names: Array<string> = []; // or string[]
// const cars: Array<string | number> = [];

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 2000);
// });
// promise.then((data) => {
//   console.log(data.toUpperCase());
// });

const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  // data.split(' ');
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
