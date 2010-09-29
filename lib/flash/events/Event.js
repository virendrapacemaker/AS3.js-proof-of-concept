/**
 * Adobe Event object docs: http://bit.ly/9LkfBS
 *
 * @this Event(type:String, bubbles:Boolean = false, cancelable:Boolean = false
 *
 * @param {string} type The event name/type.
 * @param {bool} bubbles Does this event bubble?
 * @param {bool} cancelable Can this event be canceled?
 *
 * @return {Event} An event object.
 */
flash.events.Event = Event = function(type, bubbles, cancelable) {

  // Public
  var action = function() {},
    ACTIVATE = 'activate'; // TODO: Add all other constants


  if (bubbles === undefined) {
    bubbles = false;
  }
  if (cancelable === undefined) {
    cancelable = false;
  }

  // Public Properties
  action.bubbles = false;
  action.cancelable = false;
  action.currentTarget = {};
  action.eventPhase = 0;
  action.target = {};
  action.type = type;

  // Public Methods
  action.clone = function() {};

  // formatToString(className:String, ... arguments):String
  action.formatToString = function(className) {};

  // isDefaultPrevented():Boolean
  action.isDefaultPrevented = function() {};

  // preventDefault():void
  action.preventDefault = function() {};

  // stopImmediatePropagation():void
  action.stopImmediatePropagation = function() {};

  // stopPropagation():void
  action.stopPropagation = function() {};

  // toString():String
  action.toString = function toString() {

    return 'Event Type: "' + action.type + '"';

  };

  return action;

}
