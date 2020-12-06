import { readFileSync } from 'fs';
import { resolve } from 'path';

function getInput(filename: string): string[] {
  const data = readFileSync(resolve(__dirname, `./${filename}.txt`), 'utf8');
  const parsedData = data.split('\n');
  return parsedData;
}

export function getValidPassportCount(filename: string): number {
  const data = getInput(filename);

  let currentPassport = '';
  let validPassports = 0;

  for (const row of data) {
    if (row.length === 0) {
      if (isValidPassport(currentPassport)) {
        validPassports++;
      }

      currentPassport = '';
    } else {
      currentPassport += ` ${row}`;
    }
  }

  return validPassports;
}

function isValidPassport(passport: string): boolean {
  const byr = passport.match(/byr:(.+?)(\s|$)/);
  if (!(byr && byr && parseInt(byr[1]) >= 1920 && parseInt(byr[1]) <= 2002)) {
    return false;
  }

  const iyr = passport.match(/iyr:(.+?)(\s|$)/);
  if (!(iyr && iyr && parseInt(iyr[1]) >= 2010 && parseInt(iyr[1]) <= 2020)) {
    return false;
  }

  const eyr = passport.match(/eyr:(.+?)(\s|$)/);
  if (
    !(eyr && eyr[1] && parseInt(eyr[1]) >= 2020 && parseInt(eyr[1]) <= 2030)
  ) {
    return false;
  }

  const hgt = passport.match(/hgt:(\d+)(cm|in)/);
  if (hgt) {
    if (hgt[2] === 'cm') {
      if (!(parseInt(hgt[1]) >= 150 && parseInt(hgt[1]) <= 193)) return false;
    } else if (hgt[2] === 'in') {
      if (!(parseInt(hgt[1]) >= 59 && parseInt(hgt[1]) <= 76)) return false;
    } else {
      return false;
    }
  } else {
    return false;
  }

  const hcl = passport.match(/hcl:(.+?)(\s|$)/);
  if (!(hcl && hcl[1].match(/#[a-f|0-9|]{6}/))) {
    return false;
  }

  const ecl = passport.match(/ecl:(.+?)(\s|$)/);
  const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  if (!(ecl && validEcl.includes(ecl[1]))) {
    return false;
  }

  const pid = passport.match(/pid:(.+?)(\s|$)/);
  if (!(pid && pid[1].match(/^[0-9]{9}$/))) {
    return false;
  }

  return true;
}
