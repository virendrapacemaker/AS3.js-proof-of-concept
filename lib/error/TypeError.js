goog.provide('flash.errors.TypeError');
// we cannot do this because goog already provides a TypeError namespace:
//goog.provide('TypeError');

goog.require('flash.errors.Error');

/**
 * Type Error
 *
 * @constructor
 * @param {string} message The error message.
 * @param {number} id The error id.
 */
flash.errors.TypeError = function(message, id) {
  console.log('type error init..');
  flash.errors.Error.call(this, message, id);
  this.name = 'TypeError';
};
goog.inherits(flash.errors.TypeError, flash.errors.Error);

_.enhanceWithGettersAndSetters2(flash.errors.TypeError.prototype);

//Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('flash.errors.TypeError', flash.errors.TypeError);
goog.exportSymbol('TypeError', flash.errors.TypeError);