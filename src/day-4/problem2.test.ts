import { getValidPassportCount } from './problem2';

describe('Passport', () => {
  test('works with a sample input', () => {
    expect(getValidPassportCount('sample-input-2')).toEqual(4);
  });

  test('works with a full input', () => {
    expect(getValidPassportCount('input')).toEqual(131);
  });
});
