/**
 * Base Error Class: http://bit.ly/amOu1s
 *
 * @constructor
 * @param {string} message The error message.
 * @param {number} id The error id.
 */
var Error = function(message, id) {

  //----------------------------------------------------------------------------
  // < Private Attributes >                                                    -
  //----------------------------------------------------------------------------

  var message_,
      errorId_,
      name;

  //----------------------------------------------------------------------------
  // </ Private Attributes >                                                   -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Getters n Setters >                                                     -
  //----------------------------------------------------------------------------

  this.addProperties({
    message: {
      get: function() {
        return message_;
      },
      set: function(val) {
        message_ = val;
      }
    },
    name: {
      get: function() {
        return name_;
      },
      set: function(val) {
        name_ = val;
      }
    },
    errorId: {
      get: function() {
        return errorId_;
      }
    }
  };

  //----------------------------------------------------------------------------
  // </ Getters n Setters >                                                    -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Public Methods >                                                        -
  //----------------------------------------------------------------------------

  this.getStackTrace = function() {

    // TODO: Return stack trace string

  };

  // toString():String
  this.toString = function toString() {
    return (message_ !== '') ? ('Error: ' + messasge_) : 'Error';
  };

  this.init = function(message, id) {
    message_ = message || '';
    errorId_ = (!isNaN(id)) ? id : 0;
  };

  //----------------------------------------------------------------------------
  // </ Public Methods >                                                       -
  //----------------------------------------------------------------------------

  this.init(message, id);

};
