export function getSumOfQuestionsAnswered(data: string[]): number {
  let currentCustomsForm = new Set();
  let sumOfQuestions = 0;

  for (const row of data) {
    if (row.length === 0) {
      sumOfQuestions += currentCustomsForm.size;
      currentCustomsForm = new Set();
    } else {
      for (const character of row) {
        currentCustomsForm.add(character);
      }
    }
  }

  return sumOfQuestions;
}
