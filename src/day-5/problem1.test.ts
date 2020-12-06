import { getHighestBoardingPass, getSeatId } from './problem1';

describe('Boarding', () => {
  test('gets the correct seat ID', () => {
    expect(getSeatId('FBFBBFFRLR')).toEqual(357);
    expect(getSeatId('BFFFBBFRRR')).toEqual(567);
    expect(getSeatId('FFFBBBFRRR')).toEqual(119);
    expect(getSeatId('BBFFBBFRLL')).toEqual(820);
  });

  test('gets the highest boarding pass number from the list, sample data', () => {
    expect(getHighestBoardingPass('sample-input')).toEqual(820);
  });

  test('gets the highest boarding pass number from the list, real data', () => {
    expect(getHighestBoardingPass('input')).toEqual(99999);
  });
});
