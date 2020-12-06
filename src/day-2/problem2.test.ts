import { findValidPasswordCount } from './problem2';

describe('Part 1', () => {
  test('finds all valid passwords', () => {
    expect(findValidPasswordCount('sample-input')).toBe(1);
  });

  test('finds valid passwords, real data', () => {
    expect(findValidPasswordCount('input')).toBe(272);
  });
});
