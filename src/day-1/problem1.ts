export function fixExpenseReport(numbers: number[]): number {
  for (const outerNumber of numbers) {
    for (const innerNumber of numbers) {
      const sum = outerNumber + innerNumber;
      if (sum === 2020) {
        return outerNumber * innerNumber;
      }
    }
  }

  return 0;
}
