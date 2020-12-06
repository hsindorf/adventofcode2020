import { trajectory } from './problem2';

// Right 1, down 1.
// Right 3, down 1.
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

describe('Trajectory part 1', () => {
  const cases = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  test('works with sample input', () => {
    expect(trajectory('sample-input', cases)).toEqual(336);
  });

  test('works with full input', () => {
    expect(trajectory('input', cases)).toEqual(5813773056);
  });
});
