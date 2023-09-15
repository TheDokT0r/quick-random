import random from '..';


describe('elemtFromArray', () => {
    it('should return undefined for an empty array', () => {
        expect(random.elemtFromArray([])).toBeUndefined();
    });

    it('should return a random element from the array', () => {
        const array = [1, 2, 3, 4, 5];
        const randomElement = random.elemtFromArray(array);
        expect(array).toContain(randomElement);
    });
});