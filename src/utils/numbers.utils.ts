import { WholeDecimal } from 'types/utils.types';

/** Split a number in to whole number and decimal number */
export const splitToWholeAndDecimal = (value: number): WholeDecimal => {
  const splitted = value.toString().split('.');
  const wholeNumber = Number(splitted[0]);
  const decimalNumber = Number(splitted[1]);

  return { wholeNumber, decimalNumber };
};

/** Create a number array from a given number */
export const createArrayFromNumber = (number: number = 0, fromZero: boolean = false): number[] => {
  const numberArray = Array.from({ length: number }, (_, index) => {
    return fromZero ? index : index + 1;
  });

  return numberArray;
};
