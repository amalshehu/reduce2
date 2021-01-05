import { reduce } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(reduce([1,2], (x: number) => x*2, 0)).toEqual(6);
  });
});
