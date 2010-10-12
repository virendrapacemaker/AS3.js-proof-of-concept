/**
 * Adobe Sprite docs: http://bit.ly/cALn3b
 *
 * @this flash.display.Sprite
 *
 * Currently, there is a lot more functionality going on here
 * that I care to implement at the moment, but I will still have
 * all of the variables and functions defined, just not implemented.
 *
 * Also, I plan to have all of the public method return as a normal
 * closure from js.
 */
flash.display.Sprite = Sprite = function() {

  // Private Attributes
  var buttonMode_,
      dropTarget_,
      graphics_,
      hitArea_,
      soundTransform_,
      useHandCursor_;

  //this.addProperties({
  Object.defineProperties(this, {

    buttonMode: {
      set: function(val) {
        buttonMode_ = val;
      },
      get: function() {
        return buttonMode_;
      }
    },

    dropTarget: {
      set: function(val) {
        dropTarget_ = val;
      },
      get: function() {
        return dropTarget_;
      }
    },

    graphics: { // Read Only
      get: function() {
        return graphics_;
      }
    },

    hitArea: {
      set: function(val) {
        hitArea_ = val;
      },
      get: function() {
        return hitArea_;
      }
    },

    soundTransform: {
      set: function(val) {
        soundTransform_ = val;
      },
      get: function() {
        return soundTransform_;
      }
    },

    useHandCursor: {
      set: function(val) {
        useHandCursor_ = val;
      },
      get: function() {
        return useHandCursor_;
      }
    }

  }); /* </ addProperties >*/

  /*
   * @param bool lockCenter
   * @param object:Rectangle bounds
   *
   * @return void
   */
  this.startDrag = function(lockCenter, bounds) {

    var lockCenter_ = lockCenter || false;
    var bounds_ = bounds || null;

  };

  /*
   * @param int touchPointID
   * @param bool lockCenter
   * @param object:Rectangle bounds
   *
   * @return void
   */
  this.startTouchDrag = function(touchPointID, lockCenter, bounds) {

    var touchPointID_ = touchPointID;
    var lockCenter_ = lockCenter || false;
    var bounds_ = bounds || null;

  };

  /*
   * @return void
   */
  this.stopDrag = function() {
    // TODO: stopDrag method
  };

  this.toString = function() {
    return 'Sprite:{x:' + this.x + ', y:' + this.y + '}';
  };

};

// Sprite -> DisplayObjectContainer -> InteractiveObject ->
//           DisplayObject -> EventDispatcher -> Object
Sprite.inherits(DisplayObjectContainer);
