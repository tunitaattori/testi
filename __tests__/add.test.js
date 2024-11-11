import add from "../src/add";

test('sums parameters correctly', () => {
    expect(add(1,2)).toBe(3);
})