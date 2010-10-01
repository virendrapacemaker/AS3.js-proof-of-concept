/**
 * Adobe Event Dispatcher docs: http://bit.ly/9NlZgy
 *
 * @author somethingkindawierd@gmail.com (Jon Beebe)
 *
 * @this flash.events.EventDispatcher
 *
 * @param {object} target The target of this event.
 *
 * @return {object} The Event Enabled object.
 */
flash.events.EventDispatcher = EventDispatcher = function(target) {

  // Private attributes
  var target_ = target,
      privateStore_ = function() {};

  privateStore_.listeners = [];

  // addEventListener(type:String,
  //  listener:Function,
  //  useCapture:Boolean =
  //  false,
  //  priority:int = 0,
  //  useWeakReference:Boolean = false):void
  this.addEventlistener = function(type,
                                   listener,
                                   useCapture,
                                   priority,
                                   useWeakReference) {

    useCapture = useCapture || false;
    priority = priority || 0;
    useWeakReference = useWeakReference || false;

    privateStore_.listeners.push({
      'type': type,
      'listener': listener,
      'useCapture': useCapture,
      'priority': priority,
      'useWeakReference': useWeakReference
    });

  };

  // dispatchEvent(event:Event):Boolean
  this.dispatchEvent = function(event) {

    var max = privateStore_.listeners.length;

    for (var i = 0; i < max; i = i + 1) {

      if (privateStore_.listeners[i].type === event.type) {

        // This will call the event listener, but 'this'
        // is the wrong target...
        //privateStore.listeners[i].listener(event);

        // Call the listener function, but apply it to the
        // target so 'this' is the correct scope
        privateStore_.listeners[i].listener.apply(target_, [event]);

      }

    }

  };

  // hasEventListener(type:String):Boolean
  this.hasEventListener = function(type) {};

  // removeEventListener(type:String,
  //  listener:Function,
  //  useCapture:Boolean = false):void
  this.removeEventListener = function(type, listener, useCapture) {

    if (useCapture === undefined) {
      useCapture = true;
    }

  };

  // toString():String
  this.toString = function toString() {
    return 'Event Dispatcher';
  };

}
