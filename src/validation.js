/**
 * @namespace validation
 */
var validation = {

  /**
   * Returns validity of JSON
   * @param {String} data The JSON to test
   * @returns {Boolean}
   */
  isJSON: function (data) {
    try {
      JSON.parse(data);
      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * Returns a passed object's type
   * @param {*} data The object to test
   * @returns {String}
   */
  getType: function (data) {
    if (data === null) {
      return 'null';
    }
    var t = typeof data;
    switch (t) {
    case 'function':
    case 'object':
      if (data.constructor) {
        return data.constructor.name.toLowerCase();
      }
      return ({}).prototype.toString.call(data).match(/^\[object (.+)\]$/)[1].toLowerCase();
    default:
      return t;
    }
  },

  /**
   * Returns if type matches specification
   * @param {*} data The object to test
   * @param {String} type The expected type
   * @returns {Boolean}
   */
  isType: function (data, type) {
    return (validation.getType(data) === type) ? true : false;
  }

};

module.exports = validation;