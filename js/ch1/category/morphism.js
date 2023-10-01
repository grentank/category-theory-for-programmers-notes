class Morphism {
  static id = (x) => x;

  static compose = (fn1, fn2) => (x) => fn2(fn1(x));
}

module.exports = Morphism;
