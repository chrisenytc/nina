'use strict';

var nina = require('../lib/nina.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['generate'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(nina.generate(null, 'enytc.com', '198.168.0.1', 198), 'a6f8927d3bbca958e925f9060380226584fa7012f21aeb4718f90404ce528a0e0581d7b72b05980045504a3a41171817fc1e01bccfb5341315391f7f934270f8', 'should be return a hash.');
    test.done();
  },
};
