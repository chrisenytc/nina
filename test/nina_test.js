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
    test.equal(nina.generate(null, 'example.com', '198.168.0.1', 199), '0d2edffa318d27f1d0d3c1479d6591bc1e0c8e6b44fec643b8c0e0dcf4b23b5a9d56e91a3a5883e62415d939da93484203278336b352adf1c364ef70b95e4891', 'should be return a hash.');
    test.done();
  },
};
