import { getSeat } from './problem2';

describe('Boarding', () => {
  test('works with a full input', () => {
    expect(getSeat('input')).toEqual(642);
  });
});
