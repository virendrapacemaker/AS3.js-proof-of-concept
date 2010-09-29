/**
 * http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/display/DisplayObject.html
 */
function DisplayObject () {

  var alpha_,
      height_,
      name,
      parent_,
      root_,
      rotation_,
      scrollRect_,
      transform_,
      visible_,
      width_,
      x_,
      y_
      c = {

        //-----------------------------------------------------------------
        // < Setters >
        //-----------------------------------------------------------------

        set height(val) {
          height_ = val;
        },

        set width(val) {
          width_ = val;
        },

        set alpha(val) {
          // TODO: function body
        },

        set name(val) {
          // TODO: function body
        },

        set rotation(val) {
          // TODO: function body
        },

        set transform(val) {
          // TODO: function body
        },

        set x(val) {
          // TODO: function body
        },

        set y(val) {
          // TODO: function body
        },

        //-----------------------------------------------------------------
        // </ Setters >
        //-----------------------------------------------------------------

        //-----------------------------------------------------------------
        // < Getters >
        //-----------------------------------------------------------------

        get height() {
          return height_;
        },

        get width() {
          return width_;
        },

        get alpha() {
          // TODO: function body
        },

        get name() {
          // TODO: function body
        },

        get rotation() {
          // TODO: function body
        },

        get transform() {
          // TODO: function body
        },

        get x() {
          // TODO: function body
        },

        get y() {
          // TODO: function body
        }

        //-----------------------------------------------------------------
        // </ Getters >
        //-----------------------------------------------------------------

        }; /* </ var > */

  c.prototype = EventDispatcher.prototype;

  //-----------------------------------------------------------------------
  // < Public Methods >
  //-----------------------------------------------------------------------

  // getBounds(targetCoordinateSpace:DisplayObject):Rectangle
  c.getBounds = function(targetCoordinateSpace) {

      // TODO: Return a rectangle

  };

  // getRect(targetCoordinateSpace:DisplayObject):Rectangle
  c.getRect = function (targetCoordinateSpace) {

      // TODO: Return a rectangle

  };

  // globalToLocal(point:Point):Point
  c.globalToLocal = function (point) {

    // TODO: convert point

  };

  // hitTestObject(obj:DisplayObject):Boolean
  c.hitTestObject = function (obj) {

    // TODO: hit test function body

  };

  // hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
  c.hitTestPoint = function( x, y, shapeFlag) {

    // TODO: hit test function body

  };

  // localToGlobal(point:Point):Point
  c.localToGlobal = function (point) {

    // TODO: convert point

  };

  //-----------------------------------------------------------------------
  // </ Public Methods >
  //-----------------------------------------------------------------------




  // Events
  c.Events = {

      added:flash.events.Event.ADDED

  };

}