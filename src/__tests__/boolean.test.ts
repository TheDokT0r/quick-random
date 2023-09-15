import random from '..';

describe('boolean', () => {
    it('should return a boolean', () => {
        expect(typeof random.boolean() === 'boolean').toBeTruthy();
    });
});