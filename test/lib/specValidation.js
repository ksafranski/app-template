/* global describe, it */
var expect = require('chai').expect;
var validation = require('../../lib/validation.js');

describe('validation', function () {
  
  describe('.isJSON()', function() {
    
    var testValid = validation.isJSON('{ "test": true }');
    var testInvalid = validation.isJSON('{ test: false }');

    it('should return true for valid JSON', function () {
      expect(testValid).to.equal(true);
    });

    it('should return false for invalid JSON', function () {
      expect(testInvalid).to.equal(false);
    });
    
  });
  
  describe('.getType()', function () {
    
    var testString = validation.getType('foo');
    var testNumber = validation.getType(42);
    var testBool = validation.getType(true);
    var testFunc = validation.getType(function () { });
    var testArr = validation.getType([ 'a', 'b', 'c' ]);
    var testObj = validation.getType({ foo: 'bar' });
    
    it('should properly identify a string', function () {
      expect(testString).to.equal('string');
    });
    
    it('should properly identify a number', function () {
      expect(testNumber).to.equal('number');
    });
    
    it('should properly identify a boolean', function () {
      expect(testBool).to.equal('boolean');
    });
    
    it('should properly identify a function', function () {
      expect(testFunc).to.equal('function');
    });
    
    it('should properly identify an array', function () {
      expect(testArr).to.equal('array');
    });
    
    it('should properly identify an object', function () {
      expect(testObj).to.equal('object');
    });
  });
  
  describe('.isType()', function () {
    
    var testMatch = validation.isType('foo', 'string');
    var testNoMatch = validation.isType(42, 'string');
    
    it('should return true when type is a match', function () {
      expect(testMatch).to.equal(true);
    });
    
    it('should return false when type does not match', function () {
      expect(testNoMatch).to.equal(false);
    });
    
  });

});