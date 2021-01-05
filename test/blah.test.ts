import { rObj } from '../src';

describe('reduce object ', () => {
  it('counting object values works', () => {
    expect(rObj({ one: 1, two: 2, three: 3 }, (a, b) => a + b, 0)).toEqual(6);
  });
});

describe('reduce object ', () => {
  it('multiply object values works', () => {
    expect(rObj({ one: 1, two: 2, three: 3 }, (a, b) => a * b, 1)).toEqual(6);
  });
});

describe('reduce object ', () => {
  it('String concat works', () => {
    expect(rObj({ a: 'hello', b: 'world!' }, (a, b) => a + b, '')).toEqual(
      'helloworld!'
    );
  });
});

describe('reduce object ', () => {
  it('Array concat works', () => {
    expect(
      rObj({ a: [1, 2, 3], b: [4, 5, 6] }, (a, b) => a.concat(b), [])
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('reduce object ', () => {
  it('Empty object works', () => {
    expect(
      rObj({}, a => a, {})
    ).toEqual({});
  });
});
