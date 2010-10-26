/**
 * Adobe Event object docs: http://bit.ly/as3-mouse-event
 *
 * @this flash.events.MouseEvent
 *
 * @param {string} type The event name/type.
 * @param {bool} bubbles Does this event bubble?
 * @param {bool} cancelable Can this event be canceled?
 * @param {number} localX Mouse position relative to target element.
 * @param {number} localY Mouse position relative to target element.
 * @param {object} relatedObject Ex: on mouse out, this is the new object.
 * @param {bool} ctrlKey Is the key pressed?
 * @param {bool} altKey Is the key pressed?
 * @param {bool} shiftKey Is the key pressed?
 * @param {bool} buttonDown Is the mouse button down?
 * @param {number} delta Units to move on scroll wheel event.
 * @param {bool} commandKey Only for AIR apps. Do not use.
 * @param {bool} controlKey Only for AIR apps. Do not use.
 * @param {bool} clickCount Only for AIR apps. Do not use.
 * @constructor
 * @extends {flash.events.Event}
 */
flash.events.MouseEvent = MouseEvent =
    function(type, bubbles, cancelable,
             localX, localY, relatedObject,
             ctrlKey, altKey, shiftKey,
             buttonDown, delta, commandKey,
             controlKey, clickCount) {

  Event.call(this, type, bubbles, cancelable);

  // TODO: Finish local properties -- define and set defaults

  this.localX = localX || 0;
  this.localY = localY || 0;

};
goog.inherits(MouseEvent, Event);

// TODO: Getters/Setters

// Public Methods
MouseEvent.prototype.clone = function() {};

MouseEvent.prototype.updateAfterEvent = function() {};

MouseEvent.prototype.toString = function toString() {
  return 'Event Type: "' + this.type +
         '" {x:' + this.localX +
         ', y:' + this.localY + '}';
};

// Event Constants

/**
 * @const
 */
flash.events.MouseEvent.CLICK = 'click';

/**
 * @const
 */
flash.events.MouseEvent.DOUBLE_CLICK = 'doubleClick';

/**
 * @const
 */
flash.events.MouseEvent.MOUSE_DOWN = 'mouseDown';

/**
 * @const
 */
flash.events.MouseEvent.MOUSE_MOVE = 'mouseMove';

/**
 * @const
 */
flash.events.MouseEvent.MOUSE_UP = 'mouseUp';

/**
 * @const
 */
flash.events.MouseEvent.MOUSE_DOWN = 'mouseDown';
