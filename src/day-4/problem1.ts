import { readFileSync } from 'fs';
import { resolve } from 'path';

function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function getValidPassportCount(filename: string): number {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  const data = getInput(filename);

  let currentPassport = '';
  let validPassports = 0;

  for (let i = 0; i <= data.length; i++) {
    if (data.length === i || data[i].length === 0) {
      const presentFields = requiredFields.filter((field) => {
        const match = currentPassport.match(`${field}:.+?(\s|$)`);
        return match && match.length > 0;
      });

      if (presentFields.length === requiredFields.length) {
        validPassports++;
      }

      currentPassport = '';
    } else {
      currentPassport += ` ${data[i]}`;
    }
  }

  return validPassports;
}
