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

  // TODO: Finish local properties -- define and set defaults

  var localX,
      localY;

  // TODO: Getters/Setters

  // Public Methods
  this.clone = function() {};

  this.updateAfterEvent = function() {};

  this.toString = function toString() {
    return 'Event Type: "' + this.type +
           '" {x:' + localX +
           ', y:' + localY + '}';
  };

  function init(type, bubbles, cancelable, localX, localY) {

    this.uber('init', type, bubbles, cancelable);
    localX = localX;
    localY = localY;

  }

  this.init(type, bubbles, cancelable, localX, localY);

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

MouseEvent.inherits(Event);
