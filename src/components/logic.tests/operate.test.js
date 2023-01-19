import operate from '../logic/operate';

// Test operation function
describe('Test the operate function', () => {
  // Test addition
  test('Sum 3 + 3 to equal 6:', () => {
    // Arrange
    const numberOne = 3;
    const numberTwo = 3;
    const operation = '+';
    const output = '6';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test subtraction
  test('Sub 9 - 2 to equal 7:', () => {
    // Arrange
    const numberOne = 9;
    const numberTwo = 2;
    const operation = '-';
    const output = '7';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Multiplication
  test('Mul 4 x 5 to equal 20:', () => {
    // Arrange
    const numberOne = 4;
    const numberTwo = 5;
    const operation = 'x';
    const output = '20';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Division
  test('Div 20 ÷ 4 to equal 5:', () => {
    // Arrange
    const numberOne = 20;
    const numberTwo = 4;
    const operation = '÷';
    const output = '5';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  test('Div 7 ÷ 0 to be error message:', () => {
    // Arrange
    const numberOne = 7;
    const numberTwo = 0;
    const operation = '÷';
    const output = "Can't divide by 0.";

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Modulo
  test('Mod 5 % 3 to equal 2:', () => {
    // Arrange
    const numberOne = 5;
    const numberTwo = 3;
    const operation = '%';
    const output = '2';

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });

  // Test Modulo
  test('Mod 4 % 0 to be error message:', () => {
    // Arrange
    const numberOne = 4;
    const numberTwo = 0;
    const operation = '%';
    const output = "Can't find modulo as can't divide by 0.";

    // Act
    const result = operate(numberOne, numberTwo, operation);

    // Assert
    expect(result).toBe(output);
  });
});
