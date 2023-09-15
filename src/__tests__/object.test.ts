import random from "..";

describe('object', () => {
    it('should return a random object of the same type given', () => {
        const presetObject = {
            int: 1,
            str: 'hello',
            bool: true,
            date: new Date(),
            bigint: 1n,
            object: {
                a: 1,
                b: 2,
                c: 3,
            },
            und: undefined,
        }


        const randomObject = random.object(presetObject);

        expect(typeof randomObject.int === 'number').toBeTruthy();
        expect(typeof randomObject.str === 'string').toBeTruthy();
        expect(typeof randomObject.bool === 'boolean').toBeTruthy();
        expect(randomObject.date).toBeInstanceOf(Date);
        expect(typeof randomObject.bigint === 'bigint').toBeTruthy();
        expect(typeof randomObject.object === 'object').toBeTruthy();
        expect(typeof randomObject.und === 'undefined').toBeTruthy();

        expect(Object.keys(randomObject).length).toEqual(Object.keys(presetObject).length);
    });
});