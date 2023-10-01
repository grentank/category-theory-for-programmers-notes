const memoize = require('./memoize');

const longInsertion = (initialSize, finalSize) => {
  const arr = new Array(initialSize).fill(0);
  for (let i = initialSize; i < finalSize; i++) {
    arr.unshift(i);
  }
  return arr;
};

const longInsertionMemoized = memoize(longInsertion);

// const argmnts = [1e4, 1e5];
// const memoizedStart = new Date().getTime();
// for (let i = 0; i < 10; i += 1) {
//   longInsertionMemoized(...argmnts);
// }
// const memoizedEnd = new Date().getTime();
// console.log(`Memoized: ${memoizedEnd - memoizedStart}ms`);
// const start = new Date().getTime();
// for (let i = 0; i < 10; i += 1) {
//   longInsertion(...argmnts);
// }
// const end = new Date().getTime();
// console.log(`Not Memoized: ${end - start}ms`);

// const mathRandomMemoized = memoize(Math.random);

// console.log(mathRandomMemoized());
// console.log(mathRandomMemoized());
// console.log(mathRandomMemoized());
// console.log(mathRandomMemoized());

// const mathRandomWithSeed = (fakeSeed) => {
//   return Math.random();
// };

// const mathRandomWithSeedMemoized = memoize(mathRandomWithSeed);

// console.log(mathRandomWithSeedMemoized(1))
// console.log(mathRandomWithSeedMemoized(2))
// console.log(mathRandomWithSeedMemoized(3))
// console.log(mathRandomWithSeedMemoized(3))

// const myF = (x) => {
//   let y = 0;
//   y += x;
//   return y;
// };

// const myFMemoized = memoize(myF);
// console.log(myFMemoized(1));
// console.log(myFMemoized(1));
// console.log(myFMemoized(1));
// console.log(myFMemoized(2));
// console.log(myFMemoized(2));
// console.log(myFMemoized(2));
