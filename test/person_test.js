/* jshint mocha: true*/

var assert = require('power-assert');
var Person = require('../src/person');

describe('Person', function() {
  describe('#toString()', function() {
    it('should return a string with pretty format', function() {
      var p = new Person('John Doe', '38');
      assert(/John Doe/.test(p.toString()));
      assert(/38/.test(p.toString()));
      assert(p.toString().length === 10); // fail
    });
  });
});
