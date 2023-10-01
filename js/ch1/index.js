const idF = (x) => x;

// const compose = (f1, f2) => (x) => f2(f1(x));

const mockFuncions = [
  (x) => 'Hello, ' + x,
  (x) => ({ data: x, id: 1 }),
  (x) => x >= 18,
  (x) => x.age,
];

const randomFunction = () => mockFuncions[Math.floor(Math.random() * mockFuncions.length)];

// const leftId = compose(idF, randomFunction());
// const rightId = compose(randomFunction(), idF);

// console.log(leftId('World'), rightId('World'));
const f1 = (x) => ({ ...x, name: x.age + ', ' + x.name });
const f2 = (x) => ({ ...x, name: x.name.toUpperCase(), age: x.age + 1 });
const f3 = (x) => ({ ...x, isOld: x.age >= 18 });

const compose = (fn1, fn2) => (x) => fn2(fn1(x));
const id = (x) => x;

class CategoryObject {
  constructor(options) {
    Object.assign(this, options);
  }

  map(fn) {
    return new CategoryObject(fn(this));
  }

  sequence(mappings) {
    return new CategoryObject(mappings.reduce((acc, fn) => acc.map(fn), this));
  }
}

const youngPerson = new CategoryObject({ age: 15, name: 'Alex' });
console.log(youngPerson.map(f1).map(id));
console.log(youngPerson.map(id).map(f1));
console.log(youngPerson.sequence([f1, f2, f3]));
console.log(youngPerson.sequence([compose(f1, f2), f3]));
console.log(youngPerson.sequence([f1, compose(f2, f3)]));
