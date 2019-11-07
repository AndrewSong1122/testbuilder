/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  //it('Throws an error so it fails', function() {
  //  throw new Error('Delete me!');
  //});

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
  //var should = chai.should;
  //var expect = chai.expect;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  
  //var expect = chai.expect; 
  var should = chai.should();
 
  it('Starts with 51, length of 16', function() {
    //expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('Starts with 52, length of 16', function() {
    //expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('Starts with 53, length of 16', function() {
    //expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011555555555555').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011555555555555555').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('644-649555555555').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('644-649555555555555').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6455649555555555').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6455649555555555555').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6466649555555555').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6466649555555555555').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6477649555555555').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6477649555555555555').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6488649555555555').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6488649555555555555').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6499649555555555').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6499649555555555555').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511555555555555').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511555555555555555').should.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501855555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502055555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503855555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630455555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304555555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50185555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50205555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50385555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63045555555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501855555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502055555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503855555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630455555555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038555555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50185555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50205555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50385555555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63045555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501855555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502055555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503855555555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630455555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018555555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020555555555555555').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038555555555555555').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304555555555555555').should.equal('Maestro');
  });
});

describe('China UnionPay', function() {
  var should = chai.should();

  var prefCheck = 622126;
  while(prefCheck < 622926)
  {
    var testNum = prefCheck * Math.pow(10, 10);
    it('has a prefix of ' + prefCheck + ' and a length of 16', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 11);
    it('has a prefix of ' + prefCheck + ' and a length of 17', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 12);
    it('has a prefix of ' + prefCheck + ' and a length of 18', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 13);
    it('has a prefix of ' + prefCheck + ' and a length of 19', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });

    prefCheck++;
  }

  prefCheck = 624;
  while(prefCheck < 627)
  {
    var testNum = prefCheck * Math.pow(10, 13);
    it('has a prefix of ' + prefCheck + ' and a length of 16', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 14);
    it('has a prefix of ' + prefCheck + ' and a length of 17', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 15);
    it('has a prefix of ' + prefCheck + ' and a length of 18', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 16);
    it('has a prefix of ' + prefCheck + ' and a length of 19', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });

    prefCheck++;
  }

  prefCheck = 6282;
  while(prefCheck < 6289)
  {
    var testNum = prefCheck * Math.pow(10, 12);
    it('has a prefix of ' + prefCheck + ' and a length of 16', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 13);
    it('has a prefix of ' + prefCheck + ' and a length of 17', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 14);
    it('has a prefix of ' + prefCheck + ' and a length of 18', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });
    testNum = prefCheck * Math.pow(10, 15);
    it('has a prefix of ' + prefCheck + ' and a length of 19', function() {
      detectNetwork(testNum.toString()).should.equal('China UnionPay');
    });

    prefCheck++;
  }
});

describe('Switch', function() {
  var should = chai.should();

  for(var i = 10; i < 14; i++)
  {
    if(i !== 11)
    {
      var testStr = (564182 * Math.pow(10,i)).toString();
      it('has a prefix of 564182 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
      testStr = (633110 * Math.pow(10,i)).toString();
      it('has a prefix of 633110 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });


      testStr = (4903 * Math.pow(10,(i+2))).toString();
      it('has a prefix of 4903 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
      testStr = (4905 * Math.pow(10,(i+2))).toString();
      it('has a prefix of 4905 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
      testStr = (4911 * Math.pow(10,(i+2))).toString();
      it('has a prefix of 4911 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
      testStr = (4936 * Math.pow(10,(i+2))).toString();
      it('has a prefix of 4936 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
      testStr = (6333 * Math.pow(10,(i+2))).toString();
      it('has a prefix of 63333 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
      testStr = (6759 * Math.pow(10,(i+2))).toString();
      it('has a prefix of 6759 and a length of ' + (i + 6), function() {
        (detectNetwork(testStr)).should.equal('Switch');
      });
    }
  }
});

