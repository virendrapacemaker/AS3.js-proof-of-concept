/**
 * Adobe DisplayObject docs: http://bit.ly/bBDEHa
 * @constructor
 */
flash.display.DisplayObject = DisplayObject = function() {

  EventDispatcher.call(this);

  //----------------------------------------------------------------------------
  // < Private Properties >                                                    -
  //----------------------------------------------------------------------------

  this.alpha_ = 1;
  this.height_ = 0;
  this.name;
  this.parent_; // DisplayObjectContainer that contains this DisplayObject
  this.stage_; // Will this be the canvas element?
  this.root_;
  this.rotation_ = 0;
  this.scrollRect_; // TODO: set default scroll rect
  this.transform_; // TOOD: set to default/identity transform matrix
  this.visible_ = 1;
  this.width_ = 0;
  this.x_ = 0;
  this.y_ = 0;

  //----------------------------------------------------------------------------
  // </ Private Properties >                                                   -
  //----------------------------------------------------------------------------

  this.init();

};
goog.inherits(DisplayObject, EventDispatcher);




//------------------------------------------------------------------------------
// < Getters n Setters >                                                       -
//------------------------------------------------------------------------------

// Define our getters and setters
Object.defineProperties(DisplayObject.prototype, {
  x: {
    get: function() {
      //console.log('getting x'); // just to prove that we're using the getter
      return this.x_;
    },
    set: function(val) {
      //console.log('setting x to ' + val); // prove we're using the setter
      this.x_ = val;
    }
  },
  y: {
    get: function() {
      return this.y_;
    },
    set: function(val) {
      this.y_ = val;
    }
  },
  height: {
    get: function() {
      return this.height_;
    },
    set: function(val) {
      this.height_ = val;
    }
  },
  width: {
    get: function() {
      return this.width_;
    },
    set: function(val) {
      this.width_ = val;
    }
  },
  alpha: {
    get: function() {
      return this.alpha_;
    },
    set: function(val) {
      this.alpha_ = val;
    }
  },
  name: {
    get: function() {
      return this.name_;
    },
    set: function(val) {
      this.name_ = val;
    }
  },
  rotation: {
    get: function() {
      return this.rotation_;
    },
    set: function(val) {
      this.rotation_ = val;
    }
  },
  transform: {
    get: function() {
      return this.transform_;
    },
    set: function(matrix) {
      // TODO: Setting of transform matrix
      this.transform__ = val;
    }
  },
  parent: {
    get: function() {
      return this.parent_;
    }
  },
  stage: {
    get: function() {
      return this.stage_;
    }
  }
}); /* </ Object.defineProperties > */

//------------------------------------------------------------------------------
//</ Getters n Setters >                                                       -
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//< Private Methods >                                                          -
//------------------------------------------------------------------------------

/**
 * Set the parent. Used only by the parent when the parent adds
 * this DisplayObject to the display list.
 *
 * @private
 * @param {DisplayObjectContainer} p The parent owning the display list.
 */
DisplayObject.prototype.setParent_ = function(p) {
  this.parent_ = p;
};

/**
 * Remove the parent. Used only by the parent when parent removes
 * this DisplayObject from the display list.
 *
 * @private
 */
DisplayObject.prototype.unsetParent_ = function() {
  this.parent_ = null;
};

//------------------------------------------------------------------------------
//</ Private Methods >                                                         -
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// < Public Methods >                                                          -
//------------------------------------------------------------------------------

// getBounds(targetCoordinateSpace:DisplayObject):Rectangle
DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {

  // TODO: Return a rectangle

};

// getRect(targetCoordinateSpace:DisplayObject):Rectangle
DisplayObject.prototype.getRect = function(targetCoordinateSpace) {

  // TODO: Return a rectangle

};

// globalToLocal(point:Point):Point
DisplayObject.prototype.globalToLocal = function(point) {

  // TODO: convert point

};

// hitTestObject(obj:DisplayObject):Boolean
DisplayObject.prototype.hitTestObject = function(obj) {

  // TODO: hit test function body

};

// hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag) {

  // TODO: hit test function body

};

// localToGlobal(point:Point):Point
DisplayObject.prototype.localToGlobal = function(point) {

  // TODO: convert point

};

DisplayObject.prototype.init = function() {

  // TODO: DisplayObject init function. May not be necessary

};

//------------------------------------------------------------------------------
// </ Public Methods >                                                         -
//------------------------------------------------------------------------------
