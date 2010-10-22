/**
 * Adobe DisplayObjectContainer docs: http://bit.ly/9pIZHX
 *
 * @constructor
 */
flash.display.DisplayObjectContainer = DisplayObjectContainer = function() {

  //----------------------------------------------------------------------------
  // < Private Attributes >                                                    -
  //----------------------------------------------------------------------------

  // TODO: Create Display List manager tools...
  // we'll probably want more than a simple array cause we will be doing alot
  // or searching, rearranging of order and depth, and adding/removing.
  // Create a basic display list manager for making these operations easier.

  var mouseChildren_ = true,      
      tabChildren_ = true,
      textSnapshot_,
      displayList_ = [],
      self = this;

  //----------------------------------------------------------------------------
  // </ Private Attributes >                                                   -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Getters n Setters >                                                     -
  //----------------------------------------------------------------------------

  Object.defineProperties(this, {
    mouseChildren: {
      get: function() {
        return mouseChildren_;
      },
      set: function(val) {
        mouseChildren_ = val;
      }
    },
    numChildren: {
      get: function() {
        return _(displayList_).chain().compact().size().value();
      }
    },
    tabChildren: {
      get: function() {
        return tabChildren_;
      },
      set: function(val) {
        tabChildren_ = val;
      }
    },
    textSnapshot: {
      get: function() {
        return textSnapshot_;
      }
    }
  }); /* </ Object.defineProperties > */

  //----------------------------------------------------------------------------
  // </ Getters n Setters >                                                    -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Public Methods >                                                        -
  //----------------------------------------------------------------------------

  /**
   * Add a child to the display object stack.
   *
   * @this flash.display.DisplayObjectContainer
   *
   * @param {DisplayObject} child The display object to add.
   * @return {DisplayObject} The display object added to the stack.
   */
  this.addChild = function(child) {

    if (child === this) {
      // throw ArgumentError http://bit.ly/99tWLE
      throw new ArgumentError('You cannot add a Display Object to itself');
    }

    // Is this child part of another display list? remove it first!
    if (child.parent) {
      child.parent.removeChild(child);
    }

    // TODO: Display list management -- this will need to add the item to
    // the actual canvas and draw it...
    displayList_.push(child); // will we push to end, or add to front of array?
    child.setParent_(this);

    var e = new Event(Event.ADDED);
    e.target = this; // TODO; is event target this Display Object, or the child?
    this.dispatchEvent(e);

    return child;

  };

  this.removeChild = function(child) {

    // TODO: Remove Child from display list

    // If child ! in display list, throw error

    // else remove child from display list

    child.unsetParent_();

    return child;

  };
  
  this.getChildByName = function(n) {
        
    var found = _.detect(displayList_, 
      function(child, index) { 
        if(child.name == n) {
          return true;
        }
        return false;
      }
    );
    
    return (found) ? found : undefined;
    
  };

  this.init = function() {

    // TODO: DisplayObjectContainer init function. May not be necessary

  };
  
  /*
  this.toString = function() {
  
    var i = 0,
        s = 'DisplayObject.displayList:[', 
        len = displayList_.length;
    
    for(i; i < len; i++) {
      if(this[i]) {
        s += displayList_[i].toString();
        if(i < len-1) { s += ', '; }
      }
    }
    
    s += ']';
    
    return s;
  
  }
  */

  //----------------------------------------------------------------------------
  // </ Public Methods >                                                       -
  //----------------------------------------------------------------------------

  this.init();

};

// DisplayObjectContainer -> InteractiveObject -> DisplayObject ->
//     EventDispatcher -> Object
DisplayObjectContainer.inherits(InteractiveObject);
