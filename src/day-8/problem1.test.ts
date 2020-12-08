import { getInput } from './getInput';
import { findInfiniteLoopAccValue } from './problem1';

describe('finds the infinite loop', () => {
  test('sample data', () => {
    const data = getInput('sample-input');
    expect(findInfiniteLoopAccValue(data)).toEqual(5);
  });

  test('full data', () => {
    const data = getInput('input');
    expect(findInfiniteLoopAccValue(data)).toEqual(1614);
  });
});
