import { capitalize } from "../src/capitalize";

test('Capitalizes apple to be Apple', () => {
    expect(capitalize("apple")).toBe("Apple");
})