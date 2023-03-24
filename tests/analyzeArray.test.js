import analyzeArray from '../src/analyzeArray'

test('takes the average', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});
test('returns the min', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});
test('returns the min', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});
test('returns the length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});

