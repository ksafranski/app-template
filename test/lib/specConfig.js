/* global describe, it */
var expect = require('chai').expect;
var config = require('../../lib/config.js');

describe('config', function () {
  
  describe('.build()', function() {
    
    it('should return a config object', function () {
      expect(config).to.be.an('object');
    });
    
  });
  
});