import { getInput } from './getInput';
import { getShinyGoldBagBags } from './problem2';

describe('gets the sum of questions answered for customs forms', () => {
  test('sample data', () => {
    const data = getInput('sample-input');
    expect(getShinyGoldBagBags(data)).toEqual(32);
  });

  test('full data', () => {
    const data = getInput('input');
    expect(getShinyGoldBagBags(data)).toEqual(30899);
  });
});
