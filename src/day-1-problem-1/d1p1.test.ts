import { fixExpenseReport } from './d1p1';

describe('Fix Expense Report', () => {
  test('Returns the expected combination for a small input', () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(fixExpenseReport(input)).toEqual(514579);
  });
});
