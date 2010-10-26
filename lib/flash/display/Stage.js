/**
 * Adobe Stage docs: http://bit.ly/chYY6X
 *
 * @constructor
 *
 * TODO: Flesh out the Stage class
 * TODO: init/create Stage as canvas element
 * TODO: Stage events
 * TODO: Enforce settings on inherited values that are inaplicable (see docs)
 *
 * @param {canvas} canvas The canvas element serving as the Stage.
 */
flash.display.Stage = Stage = function(canvas) {

  this.align_;
  this.displayState_;
  this.focus_;
  this.frameRate_;
  this.fullScreenHeight_;
  this.fullScreenSourceRect_;
  this.fullScreenWidth_;
  this.height_;
  this.mouseChildren_ = true;
  this.quality_;
  this.scaleMode_;
  this.showDefaultContextMenu_;
  this.stageFocusRect_;
  this.stageHeight_;
  this.stageWidth_;
  this.tabChildren_ = true;
  this.textSnapshot_;
  this.width_;
  this.canvas_;

  this.canvas_ = document.getElementById(canvas);
  this.width_ = this.canvas_.width;
  this.height_ = this.canvas_.height;
  console.log(this.canvas_);

};
Stage.inherits(DisplayObjectContainer);
//Stage -> DisplayObjectContainer -> InteractiveObject ->
//       DisplayObject -> EventDispatcher -> Object




Object.defineProperties(Stage.prototype, {
  align: {
    get: function() {
      return this.align_;
    },
    set: function(val) {
      this.align_ = val;
    }
  },
  displayState: {
    get: function() {
      return this.displayState_;
    },
    set: function(val) {
      this.displayState_ = val;
    }
  },
  focus: {
    get: function() {
      return this.focus_;
    },
    set: function(val) {
      this.focus_ = val;
    }
  },
  frameRate: {
    get: function() {
      return this.frameRate_;
    },
    set: function(val) {
      // Set the focus to an InteractiveObject
      this.frameRate_ = val;
    }
  },
  fullScreenHeight: {
    get: function() {
      return this.fullScreenHeight_;
    }
  },
  fullScreenSourceRect: {
    get: function() {
      return this.fullScreenSourceRect_;
    },
    set: function(val) {
      this.fullScreenSourceRect_ = val;
    }
  },
  fullScreenWidth: {
    get: function() {
      return this.fullScreenWidth_;
    }
  },
  height: {
    get: function() {
      return this.height_;
    },
    set: function(val) {
      this.canvas_.height = val;
      this.height_ = val;
    }
  },
  mouseChildren: {
    get: function() {
      return this.mouseChildren_;
    },
    set: function(val) {
      this.mouseChildren_ = val;
    }
  },
  numChildren: {
    get: function() {
      return _(this.displayList_).chain().compact().size().value();
    }
  },
  quality: {
    get: function() {
      return this.quality_;
    },
    set: function(val) {
      this.quality_ = val;
    }
  },
  scaleMode: {
    get: function() {
      return this.scaleMode_;
    },
    set: function(val) {
      this.scaleMode_ = val;
    }
  },
  showDefaultContextMenu: {
    get: function() {
      return this.showDefaultContextMenu_;
    },
    set: function(val) {
      this.showDefaultContextMenu_ = val;
      // TODO: hook up right-click menu to actual menu manager
      if (val && canvas_) {
        this.canvas_.oncontextmenu = function() { return true; };
      }
      else if (canvas_) {
        this.canvas_.oncontextmenu = function() { return false; };
      }
    }
  },
  stageFocusRect: {
    get: function() {
      return this.stageFocusRect_;
    },
    set: function(val) {
      this.stageFocusRect_ = val;
    }
  },
  stageHeight: {
    get: function() {
      return this.stageHeight_;
    },
    set: function(val) {
      this.stageHeight_ = val;
    }
  },
  stageWidth: {
    get: function() {
      return this.stageWidth_;
    },
    set: function(val) {
      this.stageWidth_ = val;
    }
  },
  tabChildren: {
    get: function() {
      return this.tabChildren_;
    },
    set: function(val) {
      this.tabChildren_ = val;
    }
  },
  textSnapshot: {
    get: function() {
      return this.textSnapshot_;
    }
  },
  width: {
    get: function() {
      return this.width_;
    },
    set: function(val) {
      this.canvas_.width = val;
      this.width_ = val;
    }
  }
}); /* </ Object.defineProperties > */









//----------------------------------------------------------------------------
// < Public Methods >                                                        -
//----------------------------------------------------------------------------


/**
 * @override
 */
Stage.prototype.addChild = function(child) {

  if (child instanceof DisplayObject) {

    if (child.parent) {
      child.parent.removeChild(child);
    }

    this.displayList_.push(child);

    child.setParent_(this);

    var e = new Event(Event.ADDED);
    e.target = child;
    this.dispatchEvent(e);

    return child;
  }

  return undefined; // TODO: what is appropriate return value on fail?

};

/**
 * @override
 */
Stage.prototype.addChildAt = function(child, index) {

  if (child instanceof DisplayObject) {

    if (child.parent) {
      child.parent.removeChild(child);
    }

    if (!this.displayList_[index]) {
      this.displayList_[index] = child;
    }
    else {
      this.displayList_.splice(index, 0, child);
    }

    child.setParent_(this);

    var e = new Event(Event.ADDED);
    e.target = child;
    this.dispatchEvent(e);

    return child;
  }

  return undefined; // TODO: what is appropriate return value on fail?

};

Stage.prototype.addEventListener = function(type, listener, useCapture,
                                            priority, useWeakReference) {

  useCapture = useCapture || false;
  priority = priority || 0;
  useWeakReference = useWeakReference || false;

  // TODO: function body

};

Stage.prototype.assignFocus = function(objectToFocus, direction) {
  // TODO: function body
};

Stage.prototype.dispatchEvent = function(event) {
  // TODO: function body
};

Stage.prototype.hasEventListener = function(type) {
  // TODO: function body
};

Stage.prototype.invalidate = function() {
  // TODO: function body
};

Stage.prototype.isFocusInaccessible = function() {
  // TODO: function body
};

Stage.prototype.removeChild = function(index) {

  var i = 0,
      len = this.displayList_.length;

  for (i; i < len; i++) {
    if (this.displayList_[i] === child) {
      this.displayList_.splice(i, 1);
      child.unsetParent_();
      return child;
    }
  }

  return false;

};

Stage.prototype.removeChildAt = function(index) {

  if (this.displayList_.length >= index) {
    return this.displayList_.splice(index, 1);
    child.unsetParent_();
    return child;
  }

  return false;

};

Stage.prototype.setChildIndex = function(child, index) {
  // TODO: function body
};

Stage.prototype.swapChildrenAt = function(index1, index2) {
  // TODO: function body
};

Stage.prototype.willTrigger = function(type) {
  // TODO: function body
};

Stage.prototype.toString = function toString() {
  return 'Stage';
};
