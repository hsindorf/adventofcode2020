import { readFileSync } from 'fs';
import { resolve } from 'path';

function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function findValidPasswordCount(filename: string): number {
  let validPasswords = 0;
  const data = getInput(filename);

  for (const line of data) {
    // Get the range
    const rangeMatch = line.match(/(\d+)-(\d+)/);
    const range = [parseInt(rangeMatch[1]), parseInt(rangeMatch[2])];

    // get the character
    const char = line.match(/\s(\S):/)[1];

    // get the password
    const password = line.match(/\S*$/)[0];

    // get the amount of characters within the password
    const regex = new RegExp(char, 'g');
    const matches = password.match(regex);
    const occurences = matches ? matches.length : 0;

    if (occurences >= range[0] && occurences <= range[1]) {
      validPasswords++;
    }

    // check if it's valid against the range
    // add to validPasswords if so.
  }

  return validPasswords;
}
