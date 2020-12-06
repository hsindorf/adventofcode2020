import { readFileSync } from 'fs';
import { resolve } from 'path';

export function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function findValidPasswordCount(filename: string): number {
  let validPasswords = 0;
  const data = getInput(filename);

  for (const line of data) {
    // Get the range
    const indexMatch = line.match(/(\d+)-(\d+)/);
    const indices = [parseInt(indexMatch[1]), parseInt(indexMatch[2])];

    // get the character
    const char = line.match(/\s(\S):/)[1];

    // get the password
    const password = line.match(/\S*$/)[0];

    // get the amount of characters within the password
    const charsInPassword = [
      password.charAt(indices[0] - 1),
      password.charAt(indices[1] - 1),
    ];

    if (
      (char === charsInPassword[0] && char !== charsInPassword[1]) ||
      (char !== charsInPassword[0] && char === charsInPassword[1])
    ) {
      validPasswords++;
    }

    // check if it's valid against the range
    // add to validPasswords if so.
  }

  return validPasswords;
}
