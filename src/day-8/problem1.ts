export function findInfiniteLoopAccValue(data: string[]): number {
  const visitedInstructions = new Set();
  let acc = 0;
  let i = 0;

  while (true) {
    if (visitedInstructions.has(i)) {
      return acc;
    }

    const instruction = data[i].match(/^(\S+) ([+|-]\d*)$/)!;

    visitedInstructions.add(i);

    if (instruction[1] === 'acc') {
      acc += eval(instruction[2]);
    }

    if (instruction[1] === 'jmp') {
      i += eval(instruction[2]);
      continue;
    }

    i++;
  }
}
