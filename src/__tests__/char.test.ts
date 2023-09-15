import random from "..";


describe('char', () => { 
    test('should return a string', () => {
        expect(typeof random.char() === 'string').toBeTruthy();
    });

    test('should return a string of length 1', () => {
        expect(random.char().length).toEqual(1);
    });
});