/**
 * Adobe Event object docs: http://bit.ly/9LkfBS
 * (type:String, bubbles:Boolean = false, cancelable:Boolean = false
 *
 * @this flash.events.Event
 *
 * @param {string} type The event name/type.
 * @param {bool} bubbles Does this event bubble?
 * @param {bool} cancelable Can this event be canceled?
 *
 * @return {Event} An event object.
 */
flash.events.Event = Event = function(type, bubbles, cancelable) {

  // Event Constants
  this.ACTIVATE           = 'activate';
  this.ADDED              = 'added';
  this.ADDED_TO_STAGE     = 'addedToStage';
  this.ENTER_FRAME        = 'enterFrame';
  this.EXIT_FRAME         = 'exitFrame';
  this.FRAME_CONSTRUCTED  = 'frameConstructed';
  this.REMOVED            = 'removed';
  this.REMOVED_FROM_STAGE = 'removedFromStage';
  this.RENDER             = 'render';
  // TODO: Add all other Event constants. Below only form DisplayObject

  // Public Properties
  this.bubbles = bubbles || false;
  this.cancelable = cancelable || false;
  this.currentTarget = {};
  this.eventPhase = 0;
  this.target = {};
  this.type = type;

  // Public Methods
  this.clone = function() {};

  // formatToString(className:String, ... arguments):String
  this.formatToString = function(className) {};

  // isDefaultPrevented():Boolean
  this.isDefaultPrevented = function() {};

  // preventDefault():void
  this.preventDefault = function() {};

  // stopImmediatePropagation():void
  this.stopImmediatePropagation = function() {};

  // stopPropagation():void
  this.stopPropagation = function() {};

  // toString():String
  this.toString = function toString() {
    return 'Event Type: "' + this.type + '"';
  };

  this.init = function(type, bubbles, cancelable) {

    this.type = type;
    this.bubbles = bubbles || false;
    this.cancelable = cancelable || false;

  }

  this.init(type, bubbles, cancelable);

}


flash.events.MouseEvent = MouseEvent = function(type, bubbles, cancelable, localX, localY) {

  this.toString = function toString() {
    return 'Event Type: "' + this.type +
      '" {x:' + this.mouseX +
      ', y:' + this.mouseY + '}';
  };

  this.init = function(type, bubbles, cancelable, localX, localY) {

    this.uber('init', type, bubbles, cancelable);
    this.mouseX = localX;
    this.mouseY = localY;

  }

  this.init(type, bubbles, cancelable, localX, localY);

}

MouseEvent.inherits(Event);
