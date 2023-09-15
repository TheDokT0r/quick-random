import random from "..";

describe('string', () => {
    it('should return a string', () => {
        expect(typeof random.string(10) === 'string').toBeTruthy();
    });

    it('should return a string of length 10', () => {
        expect(random.string(10).length).toEqual(10);
    });


    it('should return a string of length 10 that contains only numbers', () => {
        expect(random.string(10, '0123456789')).toMatch(/[0-9]{10}/);
    });

    it('should return a string of length 10 that contains only letters', () => {
        expect(random.string(10, 'abcdefghijklmnopqrstuvwxyz')).toMatch(/[a-z]{10}/);
    });
});