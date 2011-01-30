goog.provide('flash.display.Sprite');
goog.provide('Sprite');

goog.require('flash.display');
goog.require('flash.display.DisplayObjectContainer');

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
flash.display.Sprite = function() {

  DisplayObjectContainer.call(this);

  // Private Attributes
  this.buttonMode_;
  this.dropTarget_;
  this.graphics_;
  this.hitArea_;
  this.soundTransform_;
  this.useHandCursor_;

};
goog.inherits(flash.display.Sprite, DisplayObjectContainer);
//Sprite -> DisplayObjectContainer -> InteractiveObject ->
//DisplayObject -> EventDispatcher -> Object



Object.defineProperties(flash.display.Sprite.prototype, {

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
flash.display.Sprite.prototype.startDrag = function(lockCenter, bounds) {

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
flash.display.Sprite.prototype.startTouchDrag = function(touchPointID, lockCenter, bounds) {

  var touchPointID_ = touchPointID;
  var lockCenter_ = lockCenter || false;
  var bounds_ = bounds || null;

};

/*
 * @return void
 */
flash.display.Sprite.prototype.stopDrag = function() {
  // TODO: stopDrag method
};

flash.display.Sprite.prototype.toString = function() {
  // return 'Sprite:{x:' + this.x + ', y:' + this.y + ', ' +
  //        this.displayListToString() + '}';
  return 'Sprite:{x:' + this.x + ', y:' + this.y + '}';
};

goog.exportSymbol('flash.display.Sprite', flash.display.Sprite);
goog.exportSymbol('Sprite', flash.display.Sprite);