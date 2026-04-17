const { add, multiply, factorial } = require('../src/math');

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
test('factorielle de 0', () => {
  expect(factorial(0)).toBe(1);
});

test('erreur si négatif', () => {
  expect(() => factorial(-1)).toThrow('Nombre négatif');
});

describe('factorial', () => {
  test('factorielle de 5', () => {
    expect(factorial(5)).toBe(120);
  });
});