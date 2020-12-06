export function fixExpenseReportThreeNumbers(numbers: number[]): number {
  // this can definitely be optimized but just trying to catch up for now
  for (const outerNumber of numbers) {
    for (const innerNumber of numbers) {
      for (const innerInnerNumber of numbers) {
        const sum = outerNumber + innerNumber + innerInnerNumber;
        if (sum === 2020) {
          return outerNumber * innerNumber * innerInnerNumber;
        }
      }
    }
  }

  return 0;
}
