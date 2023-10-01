function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const argsStringified = JSON.stringify(args);
    if (cache.has(argsStringified)) return cache.get(argsStringified);

    cache.set(argsStringified, fn(...args));
    return cache.get(argsStringified);
  };
}

module.exports = memoize;
