import random from "..";

describe('number', () => {
    it('should return a number', () => {
        expect(typeof random.number(0, 100) === 'number').toBeTruthy();
    });

    it('should return a number between 0 and 100', () => {
        expect(random.number(0, 100)).toBeGreaterThanOrEqual(0);
        expect(random.number(0, 100)).toBeLessThanOrEqual(100);
    });

    it('should return a number between 0.5 and 1.5', () => {
        expect(random.number(0.5, 1.5)).toBeGreaterThanOrEqual(0.5);
        expect(random.number(0.5, 1.5)).toBeLessThanOrEqual(1.5);
    });

    it('should return a number between 0.5 and 100', () => {
        expect(random.number(0.5, 100)).toBeGreaterThanOrEqual(0.5);
        expect(random.number(0.5, 100)).toBeLessThanOrEqual(100);
    });

    it('should return a number between -100 and -1', () => {
        expect(random.number(-100, -1)).toBeGreaterThanOrEqual(-100);
        expect(random.number(-100, -1)).toBeLessThanOrEqual(-1);
    });

    it('should return a number between -100 and 100', () => {
        expect(random.number(-100, 100)).toBeGreaterThanOrEqual(-100);
        expect(random.number(-100, 100)).toBeLessThanOrEqual(100);
    });

    it('should return 1', () => {
        expect(random.number(1, 1)).toEqual(1);
    });
});