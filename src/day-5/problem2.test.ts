import { getBoardingRow } from './problem2';

describe('Boarding', () => {
  test.skip('works with a sample input', () => {
    expect(getBoardingRow('sample-input')).toEqual(44);
  });

  test.skip('works with a full input', () => {
    expect(getBoardingRow('input')).toEqual(999);
  });
});
