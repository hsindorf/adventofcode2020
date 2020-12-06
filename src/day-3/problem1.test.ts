import { trajectory } from './problem1';

describe('Trajectory part 1', () => {
  test('works with sample input', () => {
    expect(trajectory('sample-input')).toEqual(7);
  });

  test('works with full input', () => {
    expect(trajectory('input')).toEqual(234);
  });
});
