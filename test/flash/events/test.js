/**
 * This is a very simple, kinda silly test/demonstration of the events
 * system. Eventully all objects will either be in memory, or on the
 * canvas, so we will not need to touch the dom. But for simplicity's
 * sake, I'm just translating dom mouse events for now.
 *
 * @author somethingkindawierd@gmail.com (Jon Beebe)
 */

function init() {
  
  // This object is going to be the target of our events.
  // Demonstrates that event listeners are scoped to the target object.
  var o = {
    
    name : 'Jon Beebe' // some random object
    
  };
  
  
  
  
  // This represents any object we have performing events and dispatching them
  var dispatcher = new EventDispatcher(o);
  
  // Specifically wire up our canvas element
  // We will translate these events into AS3 events
  var canvas = document.getElementById('myCanvas');
  var canvasDispatcher = new EventDispatcher(canvas);
  
  
  
  
  // This represents any object that we might want to have listen to events
  var listener = {
    
    onMouseDown : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    },
    
    onMouseMove : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    },
    
    onMouseUp : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    },
    
    onSquish : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    }
    
  };
  
  
  
  
  var canvasListener = {
    
    onMouseDown : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    },
    
    onMouseMove : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    },
    
    onMouseUp : function(event) {
      
      console.log('listener called! this = ', this, 'event: ', event.toString());
      
    }
    
  };
  
  
  
  
  // Wire up our listener object to the events of the dispatcher object
  dispatcher.addEventlistener('squish', listener.onSquish);
  
  dispatcher.addEventlistener(MouseEvent.MOUSE_DOWN, listener.onMouseDown);
  
  dispatcher.addEventlistener(MouseEvent.MOUSE_MOVE, listener.onMouseMove);
  
  // Wire up listeners to our canvas element
  canvasDispatcher.addEventlistener(MouseEvent.MOUSE_DOWN, canvasListener.onMouseDown);
  
  canvasDispatcher.addEventlistener(MouseEvent.MOUSE_MOVE, canvasListener.onMouseMove);
  
  
  
  
  var target = document.getElementById('someDiv');
  
  target.onmousedown = function(event) {
    console.log(event);
    dispatcher.dispatchEvent(buildMouseEvent(event, MouseEvent.MOUSE_DOWN));
  };
  
  target.onmousemove = function(event) {
    //console.log(event);
    dispatcher.dispatchEvent(buildMouseEvent(event, MouseEvent.MOUSE_MOVE));
  };
  
  
  
  
  canvas.addEventListener(
    'mousemove',
    function(event) {
      canvasDispatcher.dispatchEvent(buildMouseEvent(event, MouseEvent.MOUSE_MOVE));
    },
    false
  );
  
  canvas.addEventListener(
    'mousedown',
    function(event) {
      canvasDispatcher.dispatchEvent(buildMouseEvent(event, MouseEvent.MOUSE_DOWN));
    },
    false
  );
  
  
  
  // Fire a random event, just to show that we can
  var monkeys = new Event('squish');
  dispatcher.dispatchEvent(monkeys);
  
}




function buildMouseEvent(e, type) {
  
  return new MouseEvent(
    type,
    true,
    true,
    getMouseX(e),
    getMouseY(e),
    null,
    e.ctrlKey,
    e.altKey,
    e.shiftKey,
    (e.button) ? true : false, // conver the 0/1 to false/true
    0, // delta: for mouse wheel movements
    null,
    null,
    null
  );
  
}


// These are here for the examples so that we can correctly set the x/y values.
// All AS3 Mouse Events are relative to the element generating them, so x/y
// will need to be relative to the top/left corner of the element, NOT the
// top/left corner of the window or the parent element.
function getMouseX(e) {
  if(e.offsetX) {
    return e.offsetX;
  }
  else if(e.currentTarget) {
    return e.pageX - e.currentTarget.offsetLeft;
  }
}

function getMouseY(e) {
  if(e.offsetY) {
    return e.offsetY;
  }
  else if(e.currentTarget) {
    return e.pageY - e.currentTarget.offsetTop;
  }
}




$(document).ready( function() {
  
  init();
  
});