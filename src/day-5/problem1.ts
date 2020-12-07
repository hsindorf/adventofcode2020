import { getInput } from './getInput';

export function getHighestBoardingPass(filename: string): number {
  const data = getInput(filename);
  let highestPass = 0;

  for (const boardingPass of data) {
    const seatId = getSeatId(boardingPass);
    if (seatId > highestPass) {
      highestPass = seatId;
    }
  }

  return highestPass;
}

export function getSeatId(boardingPass: string): number {
  let rowRange = [0, 127];
  for (let i = 0; i < 7; i++) {
    if (boardingPass[i] === 'F') {
      rowRange[1] = Math.floor((rowRange[0] + rowRange[1]) / 2);
    }
    if (boardingPass[i] === 'B') {
      rowRange[0] = Math.ceil((rowRange[0] + rowRange[1]) / 2);
    }
  }

  let seatRange = [0, 7];
  for (let i = 7; i < 10; i++) {
    if (boardingPass[i] === 'L') {
      seatRange[1] = Math.floor((seatRange[0] + seatRange[1]) / 2);
    }
    if (boardingPass[i] === 'R') {
      seatRange[0] = Math.ceil((seatRange[0] + seatRange[1]) / 2);
    }
  }

  return rowRange[0] * 8 + seatRange[0];
}
