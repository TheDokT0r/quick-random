import random from '..';

describe('arrray', () => {
    it('should return an array of strings', () => {
        const arr = random.array(100, 'string');
        expect(arr.length).toEqual(100);
        arr.forEach(str => {
            expect(typeof str === 'string');
        });
    });

    it('should return an array of numbers', () => {
        const arr = random.array(100, 'number');
        expect(arr.length).toEqual(100);
        arr.forEach(str => {
            expect(typeof str === 'number');
        });
    });

    it('should return an array of booleans', () => {
        const arr = random.array(100, 'boolean');
        expect(arr.length).toEqual(100);
        arr.forEach(str => {
            expect(typeof str === 'boolean');
        });
    });

    it('should return an array of symbols', () => {
        const arr = random.array(100, 'symbol');
        expect(arr.length).toEqual(100);
        arr.forEach(str => {
            expect(typeof str === 'symbol');
        });
    });

    it('should return an array of dates', () => {
        const arr = random.array(100, 'date');
        expect(arr.length).toEqual(100);
        arr.forEach(str => {
            expect(str).toBeInstanceOf(Date);
        });
    });

    it('should return an array of bigints', () => {
        const arr = random.array(100, 'bigint');
        expect(arr.length).toEqual(100);
        arr.forEach(str => {
            expect(typeof str === 'bigint');
        });
    });
});