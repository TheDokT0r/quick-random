import random from "..";

describe('random', () => {
    test('number', () => {
        expect(random.number(0, 100)).toBeGreaterThanOrEqual(0);
        expect(random.number(0, 100)).toBeLessThanOrEqual(100);
        expect(typeof random.number(1, 100) === 'number').toBeTruthy();

        expect(random.number(0.5, 1.5)).toBeGreaterThanOrEqual(0.5);
        expect(random.number(0.5, 1.5)).toBeLessThanOrEqual(1.5);
        expect(typeof random.number(0.5, 1.5) === 'number').toBeTruthy();

        expect(random.number(0.5, 100)).toBeGreaterThanOrEqual(0.5);
        expect(random.number(0.5, 100)).toBeLessThanOrEqual(100);
        expect(typeof random.number(0.5, 100) === 'number').toBeTruthy();

        expect(random.number(-100, -1)).toBeGreaterThanOrEqual(-100);
        expect(random.number(-100, -1)).toBeLessThanOrEqual(-1);

        expect(random.number(-100, 100)).toBeGreaterThanOrEqual(-100);
        expect(random.number(-100, 100)).toBeLessThanOrEqual(100);

        expect(random.number(1, 1)).toEqual(1);
    });


    test('string', () => {
        const str = random.string(10);
        expect(str.length).toEqual(10);
        expect(typeof str === 'string').toBeTruthy();

        const str2 = random.string(10, 'abc');
        expect(str2.length).toEqual(10);
        expect(typeof str2 === 'string').toBeTruthy();
        expect(str2).toMatch(/[abc]/);
    });


    test('char', () => {
        const char = random.char();
        expect(char.length).toEqual(1);
    });


    test('date', () => {
        expect(random.date()).toBeInstanceOf(Date);

        const minDate = new Date('2021-08-01T12:00:00.000Z');
        const maxDate = new Date('2023-08-01T12:00:00.000Z');

        expect(random.date(minDate, maxDate)).toBeInstanceOf(Date);

        expect(random.date(minDate, maxDate).getTime()).toBeGreaterThanOrEqual(minDate.getTime());
        expect(random.date(minDate, maxDate).getTime()).toBeLessThanOrEqual(maxDate.getTime());
    });


    test('symbol', () => {
        expect(typeof random.symbol() === 'symbol').toBeTruthy();
    });

    test('bigint', () => {
        expect(typeof random.bigint(0n, 100n) === 'bigint').toBeTruthy();
        expect(random.bigint(0n, 100n)).toBeGreaterThanOrEqual(0);
        expect(random.bigint(0n, 100n)).toBeLessThanOrEqual(100);
    });


    test('array', () => {
        const strArr = random.array(100, 'string');
        expect(strArr.length).toEqual(100);
        strArr.forEach(str => {
            expect(typeof str === 'string');
        });


        const numArr = random.array(100, 'number');
        expect(numArr.length).toEqual(100);
        numArr.forEach(str => {
            expect(typeof str === 'number');
        });


        const boolArr = random.array(100, 'boolean');
        expect(boolArr.length).toEqual(100);
        boolArr.forEach(str => {
            expect(typeof str === 'boolean');
        });


        const smybolArr = random.array(100, 'symbol');
        expect(smybolArr.length).toEqual(100);
        smybolArr.forEach(str => {
            expect(typeof str === 'symbol');
        });

        const dateArr = random.array(100, 'date');
        expect(dateArr.length).toEqual(100);
        dateArr.forEach(str => {
            expect(str).toBeInstanceOf(Date);
        });


        const bigintArr = random.array(100, 'bigint');
        expect(bigintArr.length).toEqual(100);
        bigintArr.forEach(str => {
            expect(typeof str === 'bigint');
        });
    });


    test('elemtFromArray', () => {
        const strArr = random.array(100, 'string');

        expect(typeof random.elemtFromArray(strArr) === 'string').toBeTruthy();

        const numArr = random.array(100, 'number');

        expect(typeof random.elemtFromArray(numArr) === 'number').toBeTruthy();


        const boolArr = random.array(100, 'boolean');

        expect(typeof random.elemtFromArray(boolArr) === 'boolean').toBeTruthy();
    });


    test('keyFromObject', () => {
        const object = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        }

        const key = random.keyFromObject(object);

        expect(Object.keys(object).includes(key)).toBeTruthy();
    });


    test('valueFromObject', () => {
        const object = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        }

        const value = random.valueFromObject(object);

        expect(Object.values(object).includes(value)).toBeTruthy();
    });


    test('object', () => {
        const object = {
            a: 1,
            b: 'string',
            c: true,
            d: new Date(),
            e: 100n,
            g: {
                a: 1,
                b: 'string',
                c: true,
                d: new Date(),
                f: 100n,
            }
        }


        const randomObject = random.object(object);

        console.log(object);
        console.log(randomObject);

        expect(randomObject.a).not.toEqual(object.a);
        expect(randomObject.b).not.toEqual(object.b);
        expect(randomObject.c).not.toEqual(object.c);
        expect(randomObject.d).not.toEqual(object.d);
        expect(randomObject.e).not.toEqual(object.e);
        expect(randomObject.g).not.toEqual(object.g);

        expect(typeof randomObject.a === 'number').toBeTruthy();
        expect(typeof randomObject.b === 'string').toBeTruthy();
        expect(typeof randomObject.c === 'boolean').toBeTruthy();
        expect(randomObject.d).toBeInstanceOf(Date);
        expect(typeof randomObject.e === 'bigint').toBeTruthy();
        expect(typeof randomObject.g === 'object').toBeTruthy();
    });
});