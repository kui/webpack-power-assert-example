/* jshint node: true*/
"use strict";

var Person = function(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype = {
  toString: function() {
    return this.name + '(' + this.age + ')';
  },
};

module.exports = Person;
