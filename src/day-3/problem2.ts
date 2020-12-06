import { readFileSync } from 'fs';
import { resolve } from 'path';

function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function trajectory(filename: string, cases: number[][]): number {
  const results: number[] = [];

  for (const rightDown of cases) {
    let rightPosition = 0;
    let trees = 0;
    const data = getInput(filename);
    for (let i = 0; i < data.length; i += rightDown[1]) {
      const rowUnits = data[i].split('');

      if (rowUnits[rightPosition % rowUnits.length] === '#') {
        trees++;
      }

      rightPosition += rightDown[0];
    }

    results.push(trees);
  }

  let output = results[0];

  for (let i = 1; i < results.length; i++) {
    output *= results[i];
  }

  return output;
}
