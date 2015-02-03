/* jshint mocha: true, browser: true */

var assert = require('power-assert');

describe('Browser Test', function() {
  describe('document', function() {
    it('should have a <body> element', function() {
      var scripts = document.getElementsByTagName('body');
      assert(scripts.length === 1);
    });
    it('should have two <script> elements', function() {
      var scripts = document.getElementsByTagName('script');
      assert(scripts.length === 2); // fail
    });
  });
});
