import random from "../src/index";

describe('random', () => {
    test('number', () => {
        expect(random.number(0, 100)).toBeGreaterThanOrEqual(0);
        expect(random.number(0, 100)).toBeLessThanOrEqual(100);

        expect(typeof random.number(1, 100) === 'number').toBeTruthy();
    });


    test('string', () => {
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const allDigits = '0123456789';

        const length = random.number(1, 100);
        expect(random.string(length).length).toEqual(length);

        const withoutUpperCase = random.string(100, { includeLowerCase: true, includeNumbers: true, includeUppperCase: false });
        const withoutLowerCase = random.string(100, { includeLowerCase: false, includeNumbers: true, includeUppperCase: true });
        const withoutNumbers = random.string(100, { includeLowerCase: true, includeNumbers: false, includeUppperCase: true });

        withoutUpperCase.split('').forEach(char => {
            expect(upperCaseChars.includes(char)).toBeFalsy();
        });

        withoutLowerCase.split('').forEach(char => {
            expect(lowerCaseChars.includes(char)).toBeFalsy();
        });

        withoutNumbers.split('').forEach(char => {
            expect(allDigits.includes(char)).toBeFalsy();
        });
    });


    test('char', () => {
        const char = random.char();
        expect(char.length).toEqual(1);
    })


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
});