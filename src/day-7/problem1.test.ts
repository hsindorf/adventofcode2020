import { getInput } from './getInput';
import { getShinyGoldBagBags } from './problem1';

describe('gets the sum of questions answered for customs forms', () => {
  test('sample data', () => {
    const data = getInput('sample-input');
    expect(getShinyGoldBagBags(data)).toEqual(4);
  });

  test('full data', () => {
    const data = getInput('input');
    expect(getShinyGoldBagBags(data)).toEqual(161);
  });
});
