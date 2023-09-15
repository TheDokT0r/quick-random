import random from '..';

describe('keyFromObject', () => {
    it('should return a random key from an object', () => {
        const object = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        }

        const key = random.keyFromObject(object);

        expect(Object.keys(object).includes(key)).toBeTruthy();
    });
});