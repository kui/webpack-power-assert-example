require('mocha');
require('style!css!mocha/mocha.css');

mocha.setup('bdd');

require('./dom_test');
require('./person_test');

mocha.run();
