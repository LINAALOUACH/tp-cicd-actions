const { add, multiply, factorial, subtract } = require('../src/math');

describe('add', () => {
  test('additionne deux nombres', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('multiply', () => {
  test('multiplie deux nombres', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});

describe('factorial', () => {
  test('factorielle de 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorielle de 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('erreur si négatif', () => {
    expect(() => factorial(-1)).toThrow('Nombre négatif');
  });
});

describe('subtract', () => {
  test('soustraction', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});