/**
 * Abbreviates a number based on its magnitude.
 * @param {number|string} number - The number to be abbreviated.
 * @returns {string} The abbreviated form of the number.
 * @throws {Error} If the input is not a valid number.
 */
export const abbreviateNumber = (number) => {
  // Convert the input to a numeric value
  const numericValue = typeof number === 'string' ? parseFloat(number) : number;

  // Validate the numeric value
  if (isNaN(numericValue)) {
    throw new Error('Invalid input. Please provide a valid number.');
  }

  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;

  if (numericValue >= billion) {
    // Abbreviate for numbers in billions
    const abbreviated = (numericValue / billion).toFixed(1);
    return abbreviated.endsWith('.0') ? abbreviated.slice(0, -2) + 'B' : abbreviated + 'B';
  } else if (numericValue >= million) {
    // Abbreviate for numbers in millions
    const abbreviated = (numericValue / million).toFixed(1);
    return abbreviated.endsWith('.0') ? abbreviated.slice(0, -2) + 'M' : abbreviated + 'M';
  } else if (numericValue >= thousand) {
    // Abbreviate for numbers in thousands
    const abbreviated = (numericValue / thousand).toFixed(1);
    return abbreviated.endsWith('.0') ? abbreviated.slice(0, -2) + 'K' : abbreviated + 'K';
  } else {
    // Return the numeric value as is for numbers below 1000
    return numericValue.toString();
  }
};

/*
EXAMPLE ON USING IT
import { abbreviateNumber } from './abbreviateNumber.js';

console.log(abbreviateNumber(1500000)); // Output: 1.5M
console.log(abbreviateNumber('2500000000')); // Output: 2.5B
console.log(abbreviateNumber('5000')); // Output: 5K
console.log(abbreviateNumber(1234)); // Output: 1.2K
console.log(abbreviateNumber(5432)); // Output: 5.4K

*/
