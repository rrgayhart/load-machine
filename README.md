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

  var loadMachine = require('load-machine');

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

Where do we start writing code?

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

## Packaging

#### Creating a User

```
  npm adduser
  npm login
```

<cite>[documentation](https://docs.npmjs.com/cli/adduser)</cite>

#### NPM init

I have made sure my app is up on Github first (allows NPM to autofill the repository details, which is nice)

Now I'll set npm up by running:

```
  npm init --scope=username
```

Note: I am [namespacing](https://docs.npmjs.com/getting-started/scoped-packages#initializing-a-scoped-package) my module, so that I don't hijack a name that someone else could use for a far better npm module than this one :D

The resulting JSON looks like:


```js
{
  "name": "@rrgayhart/load-machine",
  "version": "1.0.0",
  "description": "'my first npm module'",
  "main": "index.js",
  "scripts": {
    "test": "mocha --reporter nyan",
    "lint": "eslint .",
    "lint-fix": "eslint . --fix"
  },
  "author": "Romeeka Gayhart",
  "license": "MIT",
  "devDependencies": {
    "chai": "^3.5.0",
    "eslint": "^3.19.0",
    "mocha": "^3.2.0"
  },
  "directories": {
    "test": "test"
  },
  "dependencies": {
    "chai": "^3.5.0",
    "eslint": "^3.19.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rrgayhart/load-machine.git"
  },
  "keywords": [
    "vending",
    "machine"
  ],
  "bugs": {
    "url": "https://github.com/rrgayhart/load-machine/issues"
  },
  "homepage": "https://github.com/rrgayhart/load-machine#readme"
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

```
  npm publish
```

Because I scoped my module, I will have to tell NPM that I want it to be public.

So I actually used:

```
 npm publish --access=public
```

I can now go into my project and add the project directly

```
npm install --save @rrgayhart/load-machine
```

And I will call use the module by requiring it by it's name (without the scope)

```js
var loadMachine = require('load-machine')

```

And if I instantly regret my actions....

```
  npm unpublish [PACKAGE NAME]
```