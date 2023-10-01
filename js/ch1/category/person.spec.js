const CategoryObject = require('./categoryObject');
const { id, compose } = require('./morphism');

describe('CategoryObject', () => {
  let youngPerson;
  const f1 = (x) => ({ ...x, name: x.age + ', ' + x.name });
  const f2 = (x) => ({ ...x, name: x.name.toUpperCase(), age: x.age + 1 });
  const f3 = (x) => ({ ...x, isOld: x.age >= 18 });
  beforeEach(() => {
    youngPerson = new CategoryObject({ age: 18, name: 'Alex' });
  });
  it('Composition respects identity', () => {
    expect(youngPerson.map(id).map(f1)).toEqual(youngPerson.map(f1));
    expect(youngPerson.map(id).map(f1)).toEqual(youngPerson.map(f1).map(id));
    expect(youngPerson.map(id).map(f2)).toEqual(youngPerson.map(f2));
    expect(youngPerson.map(id).map(f2)).toEqual(youngPerson.map(f2).map(id));
  });
  it('Composition is associative', () => {
    expect(youngPerson.sequence([compose(f1, f2), f3])).toEqual(
      youngPerson.sequence([f1, compose(f2, f3)]),
    );
  });
});
