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