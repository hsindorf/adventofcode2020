import { findValidPasswordCount } from './problem1';

describe('Part 1', () => {
  test('finds all valid passwords', () => {
    expect(findValidPasswordCount('sample-input')).toBe(2);
  });

  test('finds valid passwords, real data', () => {
    expect(findValidPasswordCount('input')).toBe(383);
  });
});
