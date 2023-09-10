# quick-random

## (It's not actually quick. I just like the name.)

## What is it?

Quick random is a JavaScript/Typescript library that inclues multiple functions for generating random numbers, letters, strings, and more. I've made this function to be as easy to use as possible, and I hope you enjoy it!

## Why though?

As we all know, random in JavaScript kinda sucks (sorry, Math.random()). I've wanted an eaiser way to generate random data (mostly for my own projects). I was also kinda just bored lol.

## Installation

npm:

```bash
npm i quick-random
```

yarn:

```bash
yarn add quick-random
```

pnpm:

```bash
pnpm add quick-random
```

## How do I use it?

It's pretty simple. Just import the function you want to use, and then call it. For example, if I wanted to generate a random number between 1 and 10, I would do this:

# Random number

```js
import random from "quick-random";
random.number(1, 10);
```

# Random string

```js
import random from "quick-random";
random.string(10);
```

you can also specificy the specific characters you want to use:

```js
import random from "quick-random";
random.string(10, "abc");
```

### Random letter

```js
import random from "quick-random";
random.char();
```

### Random boolean

```js
import random from "quick-random";
random.boolean();
```

### Random array item

In this function, you can specify the type of array you want to generate. For example, if I wanted to generate a random item from an array of strings, I would do this:

```js
import random from "quick-random";
random.array("string");
```

The current optional types are: number, string, and boolean (I'm planning on adding more in the future).

### Element from array

```js
import random from 'quick-random';
random.elemtFromArray(array);
```

### Key from object

```js
import random from "quick-random";
random.keyFromObject(object);
```

### Value from object

```js
import random from "quick-random";
random.valueFromObject(object);
```
