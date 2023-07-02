// Uncomment the code below and write your tests
 import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 4, b: 1, action: Action.Subtract, expected: 3 },
    { a: 40, b: 21, action: Action.Subtract, expected: 19 },
    { a: 30, b: 2, action: Action.Subtract, expected: 28 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 38, b: 2, action: Action.Multiply, expected: 76 },
    { a: 13, b: 20, action: Action.Multiply, expected: 260 },
    { a: 100, b: 2, action: Action.Divide, expected: 50 },
    { a: 300, b: 2, action: Action.Divide, expected: 150 },
    { a: 46, b: 2, action: Action.Divide, expected: 23 },
    { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
    { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
    { a: 6, b: 2, action: Action.Exponentiate, expected: 36 },
]; 

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  testCases.forEach((testCase) => {
    const { a, b, action, expected } = testCase;

    test(`should return ${expected} for ${a} ${action} ${b}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: '[' });
    expect(result).toBeNull();
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: 'invalidAction' });
    expect(result).toBeNull();
  });
  // Consider to use Jest table tests API to test all cases above
});
