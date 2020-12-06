import { getValidPassportCount } from './problem1';

describe('Passport', () => {
  test('works with a sample input', () => {
    expect(getValidPassportCount('sample-input')).toEqual(2);
  });

  test('works with a full input', () => {
    expect(getValidPassportCount('input')).toEqual(210);
  });
});
