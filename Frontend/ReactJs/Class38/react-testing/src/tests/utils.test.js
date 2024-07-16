import { sum } from "../utils/sum"

test('sum function should work with 2 arguments', () => {
    const total = sum(1, 2);
    expect(total).toBe(3);
});

test('sum function should work with 3 arguments', () => {
    const total = sum(1, 2, 3);
    expect(total).toBe(6);
});