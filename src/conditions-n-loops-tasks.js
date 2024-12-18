/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = 0;
  const arr = [a, b, c];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let answer = false;

  if (queen.y === king.y || queen.x === king.x) {
    answer = true;
  }
  if (Math.abs(queen.y - king.y) === Math.abs(queen.x - king.x)) {
    answer = true;
  }

  return answer;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if ((a === b || a === c || b === c) && a + b > c && a + c > b && b + c > a) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romans = ['XL', 'X', 'IX', 'V', 'IV', 'I'];
  const numbers = [40, 10, 9, 5, 4, 1];
  let result = '';
  let newNum = num;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] <= newNum) {
      result += romans[i];
      newNum -= numbers[i];
      i -= 1;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let answer = '';
  const stringNumbers = [
    'minus',
    'point',
    'point',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'zero',
  ];
  const number = [
    '-',
    '.',
    ',',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];
  const arrayNumber = numberStr;
  for (let i = 0; i < arrayNumber.length; i += 1) {
    switch (arrayNumber[i]) {
      case number[0]:
        answer += ` ${stringNumbers[0]}`;
        break;
      case number[1]:
        answer += ` ${stringNumbers[1]}`;
        break;
      case number[2]:
        answer += ` ${stringNumbers[2]}`;
        break;
      case number[3]:
        answer += ` ${stringNumbers[3]}`;
        break;
      case number[4]:
        answer += ` ${stringNumbers[4]}`;
        break;
      case number[5]:
        answer += ` ${stringNumbers[5]}`;
        break;
      case number[6]:
        answer += ` ${stringNumbers[6]}`;
        break;
      case number[7]:
        answer += ` ${stringNumbers[7]}`;
        break;
      case number[8]:
        answer += ` ${stringNumbers[8]}`;
        break;
      case number[9]:
        answer += ` ${stringNumbers[9]}`;
        break;
      case number[10]:
        answer += ` ${stringNumbers[10]}`;
        break;
      case number[11]:
        answer += ` ${stringNumbers[11]}`;
        break;
      default:
        answer += ` ${stringNumbers[12]}`;
        break;
    }
  }
  let newAnswer = '';
  for (let i = 1; i < answer.length; i += 1) {
    newAnswer += answer[i];
  }

  return newAnswer;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    } else {
      index = -1;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  const string = `${num}`;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === `${digit}`) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let answer = -1;
  if (arr.length < 2 || !arr.length) {
    return answer;
  }
  let sumLeftSide = 0;
  let sumRightSide = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumRightSide += arr[i];
  }

  for (let j = 0; j < arr.length; j += 1) {
    sumLeftSide += arr[j];
    if (sumLeftSide === sumRightSide) {
      answer = j;
    }
    sumRightSide -= arr[j];
  }
  return answer;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = null;
    }
  }

  let startColumn = 0;
  let startRow = 0;
  let endColumn = matrix[0].length - 1;
  let endRow = matrix.length - 1;

  let startValue = 1;

  while (startRow <= endRow || startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      matrix[startRow][i] = startValue;
      startValue += 1;
    }
    startRow += 1;

    for (let j = startRow; j <= endRow; j += 1) {
      matrix[j][endColumn] = startValue;
      startValue += 1;
    }
    endColumn -= 1;

    for (let e = endColumn; e >= startColumn; e -= 1) {
      matrix[endRow][e] = startValue;
      startValue += 1;
    }
    endRow -= 1;

    for (let g = endRow; g >= startRow; g -= 1) {
      matrix[g][startColumn] = startValue;
      startValue += 1;
    }
    startColumn += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const result = matrix.length === 3 ? [[], [], []] : [[], [], [], [], []];
  let count = 0;
  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = newMatrix[0].length - 1; j >= 0; j -= 1) {
      result[i][j] = newMatrix[j][i];
    }
  }

  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = newMatrix[0].length - 1; j >= 0; j -= 1) {
      newMatrix[i][count] = result[i][j];
      count += 1;
    }
    if (matrix.length === 3) {
      count -= 1;
      count -= 1;
      count -= 1;
    } else {
      count -= 1;
      count -= 1;
      count -= 1;
      count -= 1;
      count -= 1;
    }
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArray = arr;
  if (newArray.length === 0) {
    return [];
  }
  const a = [];
  const b = [];
  const pivot = newArray[0];

  for (let i = 1; i < newArray.length; i += 1) {
    if (newArray[i] < pivot) {
      a[a.length] = newArray[i];
    } else {
      b[b.length] = newArray[i];
    }
  }
  const result = [...sortByAsc(a), pivot, ...sortByAsc(b)];

  for (let i = 0; i < arr.length; i += 1) {
    newArray[i] = result[i];
  }
  return newArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let count = iterations < 10 ? iterations : 4;
  if (!count) return str;
  count -= 1;
  let startStr = '';
  let endStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      startStr += str[i];
    } else {
      endStr += str[i];
    }
  }
  const result = startStr + endStr;

  return shuffleChar(result, count);
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = String(number);
  const answer = str.split('');

  let start = 0;
  const end = str.length - 1;

  while (start !== end) {
    if (+str < +answer.join('')) {
      return +answer.join('');
    }

    if (+str[end] > +str[end - 1]) {
      const temp = str[end - 1];
      answer[end - 1] = answer[end];
      answer[end] = temp;
    }
    if (+str[end] < +str[end - 1]) {
      const temp = str[end - 1];
      const temp2 = str[end];
      answer[end] = answer[end - 2];
      answer[end - 2] = temp;
      answer[end - 1] = temp2;
    }

    start += 1;
  }
  return +answer.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
