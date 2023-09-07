/**
 * Random number, string, boolean, array, element from array
 * @example
 * const random = require('random');
 */
declare const random: {
    /**
     *
     * @param {number} min the minimum number to generate
     * @param {number} max the maximum number to generate
     * @returns {number} a random number between min and max\
     * @example
     * random.number(0, 100) // 50
     * random.number(0, 100) // 10
     */
    number: (min: number, max: number) => number;
    /**
     * Generate a random string
     * @param {number} length the length of the string
     * @returns {string} a random string
     * @example
     * random.string(10) // 'aBcDeFgHiJ'
     * random.string(10) // 'tUvWxYzAbC'
    */
    string: (length: number) => string;
    /**
     * Generate a random boolean
     * @returns {boolean} a random boolean
     * @example
     * random.boolean() // true
     * random.boolean() // false
     */
    boolean: () => boolean;
    /**
     * Generate a random array
     * @param {number} length the length of the array
     * @param {'number' | 'string' | 'boolean'} type the type of the array
     * @returns {number[] | string[] | boolean[]} a random array
     * @example
     * random.array(10, 'number') // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
     * random.array(10, 'string') // [ 'aBcDeFgHiJ', 'tUvWxYzAbC', 'dEfGhIjKlM', 'nOpQrStUvW', 'xYzAbCdEfG', 'hIjKlMnOpQ', 'rStUvWxYzA', 'bCdEfGhIjK', 'lMnOpQrStU', 'vWxYzAbCdE' ]
     * random.array(10, 'boolean') // [ true, false, true, false, true, false, true, false, true, false ]
    */
    array: (length: number, type: 'number' | 'string' | 'boolean') => number[] | string[] | boolean[];
    /**
     * Get a random element from an array
     * @param {T[]} array the array to get the element from
     * @returns {T} A random element from the array
     */
    elemtFromArray: <T>(array: T[]) => T | undefined;
    /**
     * Get a random key from an object
     * @param {T extends object} object
     * @returns {keyof T} a random key from the object
     */
    keyFromObject: <T_1 extends object>(object: T_1) => keyof T_1;
    /**
     * Gets a random value from an object
     * @param {T} object the object that the value would be taken from
     * @returns {T[keyof T]} random value from the object
     */
    valueFromObject: <T_2 extends object>(object: T_2) => T_2[keyof T_2];
};

export { random as default };
