import { getInput } from './getInput';
import { getSumOfQuestionsAnswered } from './problem1';

describe('gets the sum of questions answered for customs forms', () => {
  test('sample data', () => {
    const data = getInput('sample-input');
    expect(getSumOfQuestionsAnswered(data)).toEqual(11);
  });

  test('full data', () => {
    const data = getInput('input');
    expect(getSumOfQuestionsAnswered(data)).toEqual(6542);
  });
});
