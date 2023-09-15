import random from "..";


describe('date', () => {
    it('should return a date', () => {
        expect(random.date()).toBeInstanceOf(Date);
    });

    it('should return a date between 1970-01-01 and 2020-01-01', () => {
        const date = random.date(new Date(1970, 1, 1), new Date(2020, 1, 1));
        expect(date.getTime()).toBeGreaterThanOrEqual(new Date(1970, 1, 1).getTime());
        expect(date.getTime()).toBeLessThanOrEqual(new Date(2020, 1, 1).getTime());
    });

    it('should return a date that is not equal to new Date()', () => {
        expect(random.date()).not.toEqual(new Date());
    });
});