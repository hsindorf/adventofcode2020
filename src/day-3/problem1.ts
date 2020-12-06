import { readFileSync } from 'fs';
import { resolve } from 'path';

function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function trajectory(filename: string): number {
  let rightPosition = 0;
  let trees = 0;
  const data = getInput(filename);
  for (const row of data) {
    const rowUnits = row.split('');

    if (rowUnits[rightPosition % rowUnits.length] === '#') {
      trees++;
    }

    rightPosition += 3;
  }

  return trees;
}
