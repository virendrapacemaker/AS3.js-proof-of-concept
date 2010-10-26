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
  this.buttonMode_;
  this.dropTarget_;
  this.graphics_;
  this.hitArea_;
  this.soundTransform_;
  this.useHandCursor_;

};

// Sprite -> DisplayObjectContainer -> InteractiveObject ->
//           DisplayObject -> EventDispatcher -> Object
goog.inherits(Sprite, DisplayObjectContainer);



Object.defineProperties(Sprite.prototype, {

  buttonMode: {
    set: function(val) {
      this.buttonMode_ = val;
    },
    get: function() {
      return this.buttonMode_;
    }
  },

  dropTarget: {
    set: function(val) {
    this.dropTarget_ = val;
    },
    get: function() {
      return this.dropTarget_;
    }
  },

  graphics: { // Read Only
    get: function() {
      return this.graphics_;
    }
  },

  hitArea: {
    set: function(val) {
    this.hitArea_ = val;
    },
    get: function() {
      return this.hitArea_;
    }
  },

  soundTransform: {
    set: function(val) {
      this.soundTransform_ = val;
    },
    get: function() {
      return this.soundTransform_;
    }
  },

  useHandCursor: {
    set: function(val) {
      this.useHandCursor_ = val;
    },
    get: function() {
      return this.useHandCursor_;
    }
  }

}); /* </ defineProperties >*/

/*
 * @param bool lockCenter
 * @param object:Rectangle bounds
 *
 * @return void
 */
Sprite.prototype.startDrag = function(lockCenter, bounds) {

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
Sprite.prototype.startTouchDrag = function(touchPointID, lockCenter, bounds) {

  var touchPointID_ = touchPointID;
  var lockCenter_ = lockCenter || false;
  var bounds_ = bounds || null;

};

/*
 * @return void
 */
Sprite.prototype.stopDrag = function() {
  // TODO: stopDrag method
};

Sprite.prototype.toString = function() {
  return 'Sprite:{x:' + this.x + ', y:' + this.y + '}';
};
