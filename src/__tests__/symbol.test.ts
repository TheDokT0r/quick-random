import random from "..";


describe('symbol', () => {
    it('should return a symbol', () => {
        expect(typeof random.symbol() === 'symbol').toBeTruthy();
    });
});