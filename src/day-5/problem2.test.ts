import { getBoardingRow } from './problem1';

describe('Boarding', () => {
  test('works with a sample input', () => {
    expect(getBoardingRow('sample-input')).toEqual(44);
  });

  test('works with a full input', () => {
    expect(getBoardingRow('input')).toEqual(999);
  });
});
