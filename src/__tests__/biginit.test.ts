import random from '..';

describe('biginit', () => {
    it('should return a bigint', () => {
        expect(typeof random.bigint(1n, 100n) === 'bigint').toBeTruthy();
    });

    it('should return a bigint between 0 and 100', () => {
        expect(random.bigint(0n, 100n)).toBeGreaterThanOrEqual(0n);
        expect(random.bigint(0n, 100n)).toBeLessThanOrEqual(100n);
    });
});