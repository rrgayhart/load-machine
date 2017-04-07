var expect = require('chai').expect;
var loadMachine = require('../index');

describe('loadMachine', function(){
  var items;
  var expectedResult;


  beforeEach(function(){
    items = [{item: 'apple', cost: 2},
              {item: 'banana', cost: 1.25},
              {item: 'pear', cost: 2},
              {item: 'strawberry', cost: 1.75},
              {item: 'pineapple', cost: 2.5},
              {item: 'orange', cost: 1},
              {item: 'lime', cost: .5},
              {item: 'lemon', cost: 2},
              {item: 'guava', cost: 2},
              {item: 'mango', cost: 2},
              {item: 'lichee', cost: 2}
    ];

    expectedResult =
      {a1: {item: 'apple', cost: 2},
      a2: {item: 'banana', cost: 1.25},
      a3: {item: 'pear', cost: 2},
      a4: {item: 'strawberry', cost: 1.75},
      a5: {item: 'pineapple', cost: 2.5},
      a6: {item: 'orange', cost: 1},
      b1: {item: 'lime', cost: 0.5},
      b2: {item: 'lemon', cost: 2},
      b3: {item: 'guava', cost: 2},
      b4: {item: 'mango', cost: 2},
      b5: {item: 'lichee', cost: 2},
    };
  });

  it('assigns a location code', function() {
    var result = loadMachine(items);
    expect(result).to.deep.equal(expectedResult);
  });

  it('can populate additional information', function(){
    var result = loadMachine(items, {storage: expectedResult});
    expect(Object.keys(result)[0]).to.equal('a1');
    expect(Object.keys(result)[21]).to.equal('d4');
  });

  it('can populate one item at a time');

  it('can allow the user to set width');

  it('can allow user to set depth');
});