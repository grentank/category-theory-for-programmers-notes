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

module.exports = CategoryObject;
