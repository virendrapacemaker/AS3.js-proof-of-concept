/**
 * Adobe Event Dispatcher docs: http://bit.ly/9NlZgy
 *
 * @author somethingkindawierd@gmail.com (Jon Beebe)
 *
 * @param {object} target The target of this event.
 *
 * @return {object} The Event Enabled object.
 */
function EventDispatcher(target) {

  // Public
  var action = function() {};
  action.target = target;

  var privateStore = function() {};
  privateStore.listeners = [];

  // addEventListener(type:String,
  //  listener:Function,
  //  useCapture:Boolean =
  //  false,
  //  priority:int = 0,
  //  useWeakReference:Boolean = false):void
  action.addEventlistener = function(type,
                                     listener,
                                     useCapture,
                                     priority,
                                     useWeakReference) {

    if (useCapture === undefined) {
      useCapture = false;
    }

    if (priority === undefined) {
      priority = 0;
    }

    if (useWeakReference === undefined) {
      useWeakReference = false;
    }

    privateStore.listeners.push({
      'type': type,
      'listener': listener,
      'useCapture': useCapture,
      'priority': priority,
      'useWeakReference': useWeakReference
    });

    console.log('listeners', privateStore.listeners);

  };

  // dispatchEvent(event:Event):Boolean
  action.dispatchEvent = function(event) {

    var max = privateStore.listeners.length;

    for (var i = 0; i < max; i = i + 1) {

      if (privateStore.listeners[i].type === event.type) {

        // This will call the event listener, but 'this'
        // is the wrong target...
        //privateStore.listeners[i].listener(event);

        // Call the listener function, but apply it to the
        // target so 'this' is the correct scope
        privateStore.listeners[i].listener.apply(action.target, [event]);

      }

    }

  };

  // hasEventListener(type:String):Boolean
  action.hasEventListener = function(type) {};

  // removeEventListener(type:String,
  //  listener:Function,
  //  useCapture:Boolean = false):void
  action.removeEventListener = function(type, listener, useCapture) {

    if (useCapture === undefined) {
      useCapture = true;
    }

  };

  return action;

}
