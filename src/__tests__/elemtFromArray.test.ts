import random from '..';

describe('elementFaromArray', () => {
    it('should return a random element from an array', () => {
        const arr = random.array(100, 'string');

        const element = random.elemtFromArray(arr);
        expect(element).toBeTruthy();
        expect(typeof element === 'string').toBeTruthy();

        if (element) {
            expect(arr.includes(element)).toBeTruthy();
        }
    });
});