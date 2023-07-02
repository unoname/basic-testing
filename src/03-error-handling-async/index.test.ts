// Uncomment the code below and write your tests
 import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue(7);
    expect(result).toEqual(7)
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('Error message')).toThrowError('Error message');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError('Oops!')
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError)
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(() => rejectCustomError()).rejects.toThrowError(MyAwesomeError)
  });
});
