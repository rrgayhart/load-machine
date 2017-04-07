Load Machine
=========

A small library that creates button assignments for loading a vending machine. Created for a Turing School of Software and Design lesson [Build an NPM Module](http://frontend.turing.io/lessons/build-an-npm-module.html)

## Installation

  `npm install @rrgayhart/load-machine`

## Usage

  loadMachine(items, [opts])

  - items: _required_ can be an array of multiple items or single object, string, number

  - opts: _optional_ if included, will be an object allowing the following keys

    - height: max height of the vending machine
      - default: 8

    - width: width of vending machine
      - default: 6

    storage: an object with existing items

```js

  var loadMachine = require('@rrgayhart/load-machine');

  var candies = [
    {name: 'Twix Bar'},
    {name: 'Snickers'}
  ]

  var result = loadMachine(candies);

  // console.log(result)
  // {
    // a1: {name: 'Twix Bar'},
    // a2: {name: 'Snickers'}
  // }

  loadMachine({name: 'Smarties'})

  // {
    // a1: {name: 'Twix Bar'},
    // a2: {name: 'Snickers'},
    // a3: {name: 'Smarties'}
  // }

```

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

----

# Background

Relates to lesson [Build an NPM Module](http://frontend.turing.io/lessons/build-an-npm-module.html)

Steps I took to create this module

## Creating

```
mkdir load-machine

cd load-machine
```

All you have to do is make a `package.json` file

```
npm init
```

Where do we start writing code?

```js
// package.json
"main": "index.js",
```

```
touch index.js
```

This code is going to be used by other people. So write tests.

```
  npm i mocha -D
  npm i chai -D
```

```
  mkdir test && touch test/test.js
```

Update scripts in the package.json

```
"scripts": {
  "test": "mocha --reporter spec"
}
```

## Testing Locally

I wanted to test my module out in my project locally, before pushing it up to production. 

In order to do that, I created a 'link'. See the [npm-link documentation](https://docs.npmjs.com/cli/link).

In my local module directory:

```
  cd load-machine
  npm link
```

In the directory of the project where I am using my module:

```
cd project
git checkout -b 'npm-refactor'
npm link load-machine
```

I can now use my local module as a module within my existing Vending Machine project!

```js
  // in my actual project

  var loadMachine = require('load-machine');

  // ...

VendingMachine.prototype.loadMachine = function(input){
  loadMachine(input, {storage: this.inventory})
};
```

## Deploying to NPM









## Working with Existing NPM Packages

```
   npm view hook.io 
 ```


## Creating a User

```
  npm adduser
  npm login
```

<cite>[documentation](https://docs.npmjs.com/cli/adduser)</cite>

## Publishing a Package

```
  npm publish
```

```
  npm unpublish [PACKAGE NAME]
```

## Managing Package Owners

```
 npm owner add [USER_NAME] [PACKAGE_NAME]
 npm owner rm [USER_NAME] [PACKAGE_NAME]
 npm owner ls [PACKAGE_NAME]
```

