/**
 * Class Template
 *
 * @constructor
 */
flash.display.Class = Class = function() {

  //----------------------------------------------------------------------------
  // < Private Attributes >                                                    -
  // Not truly private, but the _ denotes it                                   -
  // Google Closure Compiler will treat as private and offer comile errors     -
  // if used incorrectly                                                       -
  //----------------------------------------------------------------------------

  /**
   * @private
   */
  this.name_;
  
  /**
   * @private
   */
  this.other_;
  
  /**
   * @private
   */
  this.other2_;

  //----------------------------------------------------------------------------
  // </ Private Attributes >                                                   -
  //----------------------------------------------------------------------------

};
goog.inherits(Class, Parent); // Notice no new-line between this & constructor
// Class -> Parent Class -> Parent Class -> Object

//------------------------------------------------------------------------------
// < Getters n Setters >                                                       -
// These are not supported by ECMA 3, and thus not by Google Closure           -
// compiler. Someday...                                                        -
//------------------------------------------------------------------------------

Object.defineProperties(Class.prototype, {
  name: {
    get: function() {
      return this.name_;
    },
    set: function(val) {
      this.name_ = val;
    }
  }
};

//------------------------------------------------------------------------------
// </ Getters n Setters >                                                      -
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// < Public Methods >                                                          -
//------------------------------------------------------------------------------

/**
 * Some public method.
 * @param {type} param Description.
 */
Class.prototype.publicMethod = function(param) {

  // TODO: function body

};

/**
 * Render object to string.
 * @override
 * @return {string} Object as string.
 */
Class.prototype.toString = function toString() {
  
  return this.name_;
  
};
