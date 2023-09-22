    /**
    * Which type the random.array operation would return (so it wouldn't return unknown)
    */
    type ArrayType<T> = T extends 'number' ? number[]
        : T extends 'string' ? string[]
        : T extends 'boolean' ? boolean[]
        : T extends 'date' ? Date[]
        : T extends 'bigint' ? bigint[]
        : T extends 'symbol' ? symbol[]
        : T extends 'unknown' ? unknown[]
        : never;

export default ArrayType;