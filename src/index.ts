/**
 * Random number, string, boolean, array, element from array
 * @example
 * const random = require('random');
*/

/**
 * Which type the random.array operation would return (so it wouldn't return unknown)
 */
type ArrayType<T> = T extends 'number' ? number[] : T extends 'string' ? string[] : T extends 'boolean' ? boolean[] : never;

const random = {
    /**
     * 
     * @param {number} min the minimum number to generate 
     * @param {number} max the maximum number to generate 
     * @returns {number} a random number between min and max\
     * @example
     * random.number(0, 100) // 50
     * random.number(0, 100) // 10
     */
    number: (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min) + min);
    },

    /**
     * Generate a random string
     * @param {number} length the length of the string
     * @returns {string} a random string
     * @example
     * random.string(10) // 'aBcDeFgHiJ'
     * random.string(10) // 'tUvWxYzAbC'
    */
    string: (length: number): string => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(random.number(0, charactersLength));
        }

        return result;
    },

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
     * Generate a random array
     * @param {number} length the length of the array
     * @param {'number' | 'string' | 'boolean'} type the type of the array
     * @returns {T[]} a random array
     * @example
     * random.array(10, 'number') // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
     * random.array(10, 'string') // [ 'aBcDeFgHiJ', 'tUvWxYzAbC', 'dEfGhIjKlM', 'nOpQrStUvW', 'xYzAbCdEfG', 'hIjKlMnOpQ', 'rStUvWxYzA', 'bCdEfGhIjK', 'lMnOpQrStU', 'vWxYzAbCdE' ]
     * random.array(10, 'boolean') // [ true, false, true, false, true, false, true, false, true, false ]
    */
    array: <T extends 'number' | 'string' | 'boolean'>(length: number, type: T): ArrayType<T> => {
        let result: any[] = [];

        for (let i = 0; i < length; i++) {
            switch (type) {
                case 'number':
                    result.push(random.number(0, 100));
                    break;
                case 'string':
                    result.push(random.string(random.number(0, 10)));
                    break;
                case 'boolean':
                    result.push(random.boolean());
                    break;
            }
        }

        return result as ArrayType<T>;
    },

    /**
     * Get a random element from an array
     * @param {T[]} array the array to get the element from 
     * @returns {T} A random element from the array
     */
    elemtFromArray: <T>(array: T[]): T | undefined => array[random.number(0, array.length)],

    /**
     * Get a random key from an object
     * @param {T extends object} object 
     * @returns {keyof T} a random key from the object
     */
    keyFromObject: <T extends object>(object: T): keyof T => {
        const keys = Object.keys(object);
        return keys[random.number(0, keys.length)] as keyof T;
    },


    /**
     * Gets a random value from an object
     * @param {T} object the object that the value would be taken from
     * @returns {T[keyof T]} random value from the object
     */
    valueFromObject: <T extends object>(object: T): T[keyof T] => {
        const values = Object.values(object);
        return values[random.number(0, values.length)];
    }
}


export default random;