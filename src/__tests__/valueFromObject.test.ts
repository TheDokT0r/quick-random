import random from '..';



describe('valueFromObject', () => {
    it('should return a random value from an object', () => {
        const object = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        }

        const value = random.valueFromObject(object);

        expect(Object.values(object).includes(value)).toBeTruthy();
    });
});