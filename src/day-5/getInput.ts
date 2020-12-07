import { readFileSync } from 'fs';
import { resolve } from 'path';

export function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}
