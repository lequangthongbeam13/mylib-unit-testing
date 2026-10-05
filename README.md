# mylib unit testing

A small JavaScript library with the four basic arithmetic operations (add, subtract, multiply, divide), a main program that uses it, and unit tests written with Mocha and Chai.

Exercise II "Unit testing" for the course AT00CK37 DevOps Engineering (Software Testing), LAB University of Applied Sciences.

## Requirements

- Node.js 20.19 or newer (Chai 6 is an ES module, and older Node versions cannot load it with `require()`)
- npm

## Install

```bash
npm install
```

## Run the main program

```bash
npm start
```

## Run the unit tests

```bash
npm test
```

The tests import only `src/mylib.js`, so they run without the main program.

## Project structure

```
src/mylib.js         The library (add, subtract, multiply, divide)
src/main.js          Main program that runs every library function
tests/mylib.test.js  Mocha + Chai unit tests (expect style)
```

## Author

Quang Thong Le
