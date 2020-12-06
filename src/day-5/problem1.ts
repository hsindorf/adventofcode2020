import { readFileSync } from 'fs';
import { resolve } from 'path';

function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function getHighestBoardingPass(filename: string): number {
  const data = getInput(filename);
  return 0;
}

export function getSeatId(boardingPass: string): number {
  return 3;
}
