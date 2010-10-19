/**
 * Adobe Docs for ArgumentError: http://bit.ly/99tWLE
 * @constructor
 * @param {string} message The error message.
 */
flash.errors.ArgumentError = ArgumentError = function(message) {

  this.init = function(message) {
    this.uber('init', message);
  };

  this.init(message);

};

ArgumentError.inherits(Error);
