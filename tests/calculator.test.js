import Calculator from "../src/calculator";

test('Calculator is an object', () => {
    expect(typeof(Calculator)).toBe("object");
});

test('Calculator to add two positive integers', () => {
    expect(Calculator.add(1,5)).toBe(6);
});

test('Calculator to add negative integers', () => {
    expect(Calculator.add(-1,-5)).toBe(-6);
});

test('Calculator to add large numbers', () => {
    expect(Calculator.add(100900200,100900200)).toBe(201800400);
});

test('Calculator to subtract two positive integers', () => {
    expect(Calculator.subtract(5,1)).toBe(4);
});

test('Calculator to subtract negative integers', () => {
    expect(Calculator.subtract(-1,-5)).toBe(4);
});

test('Calculator to subtract large numbers', () => {
    expect(Calculator.subtract(100900200,100900200)).toBe(0);
});

test('Calculator to divide two positive integers', () => {
    expect(Calculator.divide(6,2)).toBe(3);
});

test('Calculator to divide integers to floats', () => {
    expect(Calculator.divide(5,2)).toBe(2.5);
});

test('Calculator to divide large numbers', () => {
    expect(Calculator.divide(100900200,100900200)).toBe(1);
});

test('Calculator to multiply two positive integers', () => {
    expect(Calculator.multiply(6,2)).toBe(12);
});

test('Calculator to multiply two negative integers', () => {
    expect(Calculator.multiply(-5,-2)).toBe(10);
});

test('Calculator to multiply large numbers', () => {
    expect(Calculator.multiply(200000,400000)).toBe(80000000000);
});
