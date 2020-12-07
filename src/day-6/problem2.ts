export function getSumOfQuestionsAnswered(data: string[]): number {
  let currentCustomsForm = {};
  let peopleInGroup = 0;
  let sumOfQuestions = 0;

  for (const row of data) {
    if (row.length === 0) {
      sumOfQuestions += Object.values(currentCustomsForm).filter(
        (val) => val === peopleInGroup,
      ).length;

      currentCustomsForm = {};
      peopleInGroup = 0;
    } else {
      peopleInGroup++;
      for (const character of row) {
        currentCustomsForm[character] = currentCustomsForm[character]
          ? currentCustomsForm[character] + 1
          : 1;
      }
    }
  }

  return sumOfQuestions;
}
