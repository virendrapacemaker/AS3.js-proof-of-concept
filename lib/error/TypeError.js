/**
 * Type Error
 *
 * @constructor
 * @param {string} message The error message.
 * @param {number} id The error id.
 */
flash.errors.TypeError = TypeError = function(message, id) {
  Error.call(this, message, id);
  this.name = 'TypeError';
};
goog.inherits(TypeError, Error);

_.enhanceWithGettersAndSetters2(TypeError.prototype);