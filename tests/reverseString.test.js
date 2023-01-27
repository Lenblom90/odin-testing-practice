import { reverseString } from "../src/reverseString";

test('Reverses apple to be elppa', () => {
    expect(reverseString("apple")).toBe("elppa");
})

test('Reverses Hello to be olleH', () => {
    expect(reverseString("Hello")).toBe("olleH");
})

test('Reverses at to be ta', () => {
    expect(reverseString("at")).toBe("ta");
})