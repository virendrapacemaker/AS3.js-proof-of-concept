/**
 * Adobe DisplayObject docs: http://bit.ly/bBDEHa
 * @constructor
 */
flash.display.DisplayObject = DisplayObject = function() {

  //----------------------------------------------------------------------------
  // < Private Properties >                                                    -
  //----------------------------------------------------------------------------

  var alpha_ = 1,
      height_ = 0,
      name,
      parent_, // DisplayObjectContainer that contains this DisplayObject
      stage_, // Will this be the canvas element?
      root_,
      rotation_ = 0,
      scrollRect_, // TODO: set default scroll rect
      transform_, // TOOD: set to default/identity transform matrix
      visible_ = 1,
      width_ = 0,
      x_ = 0,
      y_ = 0;

  //----------------------------------------------------------------------------
  // </ Private Properties >                                                   -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Getters n Setters >                                                     -
  //----------------------------------------------------------------------------

  // Define our getters and setters
  Object.defineProperties(this, {
    x: {
      get: function() {
        console.log('getting x'); // just to prove that we're using the getter
        return x_;
      },
      set: function(val) {
        console.log('setting x to ' + val);  // prove we're using the setter
        x_ = val;
      }
    },
    y: {
      get: function() {
        return y_;
      },
      set: function(val) {
        y_ = val;
      }
    },
    height: {
      get: function() {
        return height_;
      },
      set: function(val) {
        height_ = val;
      }
    },
    width: {
      get: function() {
        return width_;
      },
      set: function(val) {
        width_ = val;
      }
    },
    alpha: {
      get: function() {
        return alpha_;
      },
      set: function(val) {
        alpha_ = val;
      }
    },
    name: {
      get: function() {
        return name_;
      },
      set: function(val) {
        name_ = val;
      }
    },
    rotation: {
      get: function() {
        return rotation_;
      },
      set: function(val) {
        rotation_ = val;
      }
    },
    transform: {
      get: function() {
        return transform_;
      },
      set: function(matrix) {
        // TODO: Setting of transfrom matrix
        transform__ = val;
      }
    },
    parent: {
      get: function() {
        return parent_;
      }
    },
    stage: {
      get: function() {
        return stage_;
      }
    }
  }); /* </ Object.defineProperties > */

  //----------------------------------------------------------------------------
  // </ Getters n Setters >                                                    -
  //----------------------------------------------------------------------------

  /**
   * Set the parent. Used only by the parent when the parent adds
   * this DisplayObject to the display list.
   *
   * @private
   * @param {DisplayObjectContainer} p The parent owning the display list.
   */
  this.setParent_ = function(p) {
    parent_ = p;
  };

  /**
   * Remove the parent. Used only by the parent when parent removes
   * this DisplayObject from the display list.
   *
   * @private
   */
  this.unsetParent_ = function() {
    parent_ = null;
  };

  //----------------------------------------------------------------------------
  // < Public Methods >                                                        -
  //----------------------------------------------------------------------------

  // getBounds(targetCoordinateSpace:DisplayObject):Rectangle
  this.getBounds = function(targetCoordinateSpace) {

    // TODO: Return a rectangle

  };

  // getRect(targetCoordinateSpace:DisplayObject):Rectangle
  this.getRect = function(targetCoordinateSpace) {

    // TODO: Return a rectangle

  };

  // globalToLocal(point:Point):Point
  this.globalToLocal = function(point) {

    // TODO: convert point

  };

  // hitTestObject(obj:DisplayObject):Boolean
  this.hitTestObject = function(obj) {

    // TODO: hit test function body

  };

  // hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
  this.hitTestPoint = function(x, y, shapeFlag) {

    // TODO: hit test function body

  };

  // localToGlobal(point:Point):Point
  this.localToGlobal = function(point) {

    // TODO: convert point

  };

  this.init = function() {

    // TODO: DisplayObject init function. May not be necessary

  };

  //----------------------------------------------------------------------------
  // </ Public Methods >                                                       -
  //----------------------------------------------------------------------------

  this.init();

};

DisplayObject.inherits(EventDispatcher);
