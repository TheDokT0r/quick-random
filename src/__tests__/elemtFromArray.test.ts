import random from '..';


describe('elemtFromArray', () => {
    it('should return undefined for an empty array', () => {
        expect(random.elementFromArray([])).toBeUndefined();
    });

    it('should return a random element from the array', () => {
        const array = [1, 2, 3, 4, 5];
        const randomElement = random.elementFromArray(array);
        expect(array).toContain(randomElement);
    });
});