/**
 * Adobe Event Dispatcher docs: http://bit.ly/9NlZgy
 *
 * @this flash.events.EventDispatcher
 * @param {object} target The target of this event.
 * @constructor
 */
flash.events.EventDispatcher = EventDispatcher = function(target) {

  /**
   * @private
   */
  this.target_ = target || null;
  
  /**
   * @private
   */
  this.privateStore_ = function() {};

  this.privateStore_.listeners = [];

};

// addEventListener(type:String,
//  listener:Function,
//  useCapture:Boolean =
//  false,
//  priority:int = 0,
//  useWeakReference:Boolean = false):void
EventDispatcher.prototype.addEventlistener = function(type,
                                 listener,
                                 useCapture,
                                 priority,
                                 useWeakReference) {

  // set defaults for undefined values
  useCapture = useCapture || false;
  priority = priority || 0;
  useWeakReference = useWeakReference || false;

  this.privateStore_.listeners.push({
    'type': type,
    'listener': listener,
    'useCapture': useCapture,
    'priority': priority,
    'useWeakReference': useWeakReference
  });

};

EventDispatcher.prototype.dispatchEvent = function(event) {

  var max = this.privateStore_.listeners.length;

  for (var i = 0; i < max; i = i + 1) {

    if (this.privateStore_.listeners[i].type === event.type) {

      // Call the listener function, but apply it to the
      // target so 'this' is the correct scope
      this.privateStore_.listeners[i].listener.apply(target_, [event]);

    }

  }

};

EventDispatcher.prototype.hasEventListener = function(type) {};

EventDispatcher.prototype.removeEventListener = function(type, listener, useCapture) {

  if (useCapture === undefined) {
    useCapture = true;
  }

};

// toString():String
EventDispatcher.prototype.toString = function toString() {
  return 'Event Dispatcher';
};
