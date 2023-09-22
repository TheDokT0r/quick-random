import ArrayType from "./@types/ArrayType";
import PrimitiveTypeStrings from "./@types/PrimitiveTypeStrings";

/**
 * Random number, string, boolean, array, element from array
 * @example
 * const random = require('random');
*/

const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * Extra options for the random string options
 */

const random = {
    /**
     * Generate a random number between min and max
     * @param {number} min the minimum number to generate
     * @param {number} max the maximum number to generate
     * @returns {number} a random number between min and max
     * @see random.bigint for a bigint version
     * @example
     * random.number(0, 100) // 50
     * random.number(0.5, 1.5) // 1.2
     */
    number: (min: number, max: number): number => {
        if (Number.isInteger(min) && Number.isInteger(max)) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        return Math.random() * (max - min) + min;
    },

    /**
     * Generate a random string
     * @param {number} length the length of the string
     * @param {string} characters the characters to generate the string from (default: allCharacters)
     * @returns {string} a random string
     * @example
     * random.string(10) // 'aBcDeFgHiJ'
     * random.string(10, {includeUpperCase: false}) // 'abcdefghij'
    */
    string: (length: number, characters: string = allCharacters): string => {
        let result = '';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(random.number(0, charactersLength - 1));
        }

        return result;
    },


    /**
     * @returns {string} a random character
     * @example
     * random.char(); //returns 'A'
     * random.char(); //returns 'b'
     */
    char: (): string => random.string(1),

    /**
     * Generate a random boolean
     * @returns {boolean} a random boolean
     * @example
     * random.boolean() // true
     * random.boolean() // false
     */
    boolean: (): boolean => {
        return Math.random() >= 0.5;
    },


    /**
     * Generates a random date between minDate and maxDate
     * @param {Date} minData optional minimum date 
     * @param {Date maxDate optional maximum date 
     * @returns {Date} a random date
     * 
     * @example
     * random.date() // 2021-08-01T12:00:00.000Z
     * random.date(new Date('2021-08-01T12:00:00.000Z'), new Date('2021-08-01T12:00:00.000Z')) // 2021-08-01T12:00:00.000Z
     */
    date: (minData?: Date | string, maxDate?: Date | string): Date => {
        const min = minData ? new Date(minData).getTime() : 0;
        const max = maxDate ? new Date(maxDate).getTime() : Date.now() + 100000000000;

        return new Date(random.number(min, max));
    },


    /**
     * 
     * @returns {symbol} a random symbol
     * @example
     * random.symbol() // Symbol(5)
     * random.symbol() // Symbol(10)
     */
    symbol: (): symbol => Symbol(random.string(10)),


    /**
     * Generates a random bigint
     * @param {bigint} min minimum number 
     * @param {bigint} max maximum number
     * @returns {bigint} a random bigint
     * @see random.number for a number version
     * @example
     * random.bigint(0n, 100n) // 50n
     * random.bigint(0n, 100n) // 10n
     */
    bigint: (min: bigint, max: bigint): bigint => {
        return BigInt(random.number(Number(min), Number(max)));
    },

    /**
     * Generate a random array
     * 
     * Can generate an array of numbers, strings, booleans, symbols, dates and bigints
     * @param {number} length the length of the array
     * @param {T} type (random by default) the type of the array
     * @returns {T[]} a random array
     * @example
     * random.array(10, 'number') // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
     * random.array(10, 'string') // [ 'aBcDeFgHiJ', 'tUvWxYzAbC', 'dEfGhIjKlM', 'nOpQrStUvW', 'xYzAbCdEfG', 'hIjKlMnOpQ', 'rStUvWxYzA', 'bCdEfGhIjK', 'lMnOpQrStU', 'vWxYzAbCdE' ]
     * random.array(10, 'boolean') // [ true, false, true, false, true, false, true, false, true, false ]
     * random.array(10, 'symbol') // [ Symbol
    */
    array: <T extends PrimitiveTypeStrings>(length: number, type: T = 'unknown' as T): ArrayType<T> => {
        const result: unknown[] = [];

        for (let i = 0; i < length; i++) {
            switch (type) {
                case 'number':
                    result.push(random.number(0, 100));
                    break;
                case 'string':
                    result.push(random.string(random.number(1, 10)));
                    break;
                case 'boolean':
                    result.push(random.boolean());
                    break;

                case 'symbol':
                    result.push(random.symbol());
                    break;

                case 'date':
                    result.push(random.date());
                    break;

                case 'bigint':
                    result.push(random.bigint(0n, 100n));
                    break;

                case 'unknown':
                    result.push(random.elementFromArray(['number', 'string', 'boolean', 'symbol', 'date', 'bigint']));
                    break;

                default:
                    throw new Error('Invalid type');
            }
        }

        return result as ArrayType<T>;
    },

    /**
     * Get a random element from an array
     * @param {T[]} array the array to get the element from 
     * @returns {T} A random element from the array
     */
    elementFromArray: <T>(array: T[]): T | undefined => array[random.number(0, array.length - 1)],

    /**
     * Get a random key from an object
     * @param {T extends object} object 
     * @returns {keyof T} a random key from the object
     */
    keyFromObject: <T extends object>(object: T): keyof T => {
        const keys = Object.keys(object);
        return keys[random.number(0, keys.length - 1)] as keyof T;
    },


    /**
     * Gets a random value from an object
     * @param {T} object the object that the value would be taken from
     * @returns {T[keyof T]} random value from the object
     */
    valueFromObject: <T extends object>(object: T): T[keyof T] => {
        const values = Object.values(object);
        return values[random.number(0, values.length - 1)];
    },


    /**
     * `Still experimental`
     * 
     * Generates a random object based on the object passed
     * 
     * Important to note that the symbol type is not supported at the moment
     * @param {T} object a object to generate a random object from 
     * @returns {T} a random object of the same type as the object passed
     * @example
     * random.object({a: 1, b: 'hello', c: {}}) // { a: 50, b: 'aBcDeFgHiJ', c: {} }
     * 
     */
    object: <T extends object>(object: T): T => {
        const randomObject = structuredClone(object);

        Object.keys(object).forEach(key => {
            const element = object[key as keyof typeof object];

            switch (typeof element) {
                case 'number':
                    randomObject[key as keyof typeof object] = random.number(0, 100) as unknown as T[keyof T];
                    break;

                case 'string':
                    randomObject[key as keyof typeof object] = random.string(random.number(0, 10)) as unknown as T[keyof T];
                    break;

                case 'boolean':
                    randomObject[key as keyof typeof object] = random.boolean() as unknown as T[keyof T];
                    break;

                case 'symbol':
                    throw new Error('Symbol is not supported at the moment');

                case 'bigint':
                    randomObject[key as keyof typeof object] = random.bigint(0n, 100n) as unknown as T[keyof T];
                    break;

                case 'object':
                    if (Array.isArray(element)) randomObject[key as keyof typeof object] = random.array(10, 'number') as unknown as T[keyof T];
                    else if (element instanceof Date) randomObject[key as keyof typeof object] = random.date() as unknown as T[keyof T];
                    else if (element === null) randomObject[key as keyof typeof object] = null as unknown as T[keyof T];
                    else
                        randomObject[key as keyof typeof object] = random.object(element as unknown as T) as unknown as T[keyof T];
                    break;

                case 'undefined':
                    randomObject[key as keyof typeof object] = undefined as unknown as T[keyof T];
                    break;

                case 'function':
                    throw new Error('Function is not supported at the moment');

                default:
                    throw new Error('Invalid type');
            }
        });

        return randomObject;
    }
}

export default random;
