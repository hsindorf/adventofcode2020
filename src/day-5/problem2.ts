import { getInput } from './getInput';
import { getSeatId } from './problem1';

export function getSeat(filename: string): number {
  const data = getInput(filename);
  const seats = [];

  for (const boardingPass of data) {
    const seatId = getSeatId(boardingPass);
    seats.push(seatId);
  }
  seats.sort((a, b) => a - b);

  for (let i = 1; i < seats.length; i++) {
    if (seats[i] !== seats[i - 1] + 1) {
      return seats[i] - 1;
    }
  }

  return 0;
}
