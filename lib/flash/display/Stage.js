/**
 * Adobe Stage docs: http://bit.ly/chYY6X
 *
 * TODO: Flesh out the Stage class
 * TODO: init/create Stage as canvas element
 * TODO: Stage events
 */
flash.display.Stage = Stage = function(canvas) {

  //----------------------------------------------------------------------------
  // < Private Properties >                                                    -
  //----------------------------------------------------------------------------

  var align_,
      displayState_,
      focus_,
      frameRate_,
      fullScreenHeight_,
      fullScreenSourceRect_,
      fullScreenWidth_,
      height_,
      mouseChildren_,
      numChildren_,
      quality_,
      scaleMode_,
      showDefaultContextMenu_,
      stageFocusRect_,
      stageHeight_,
      stageWidth_,
      tabChildren_,
      textSnapshot_,
      width_,

      canvas_
      self = this;

  //----------------------------------------------------------------------------
  // </ Private Properties >                                                   -
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  // < Getters n Setters >                                                     -
  //----------------------------------------------------------------------------

  Object.defineProperties(this, {
    align: {
        get: function() {
          return align_;
        },
      set: function(val) {
        align_ = val;
      }
    },
    displayState: {
      get: function() {
        return displayState_;
      },
      set: function(val) {
        displayState_ = val;
      }
    },
    focus: {
      get: function() {
        return focus_;
      },
      set: function(val) {
        focus_ = val;
      }
    },
    frameRate: {
      get: function() {
        return frameRate_;
      },
      set: function(val) {
        frameRate_ = val;
      }
    },
    fullScreenHeight: {
      get: function() {
        return fullScreenHeight_;
      }
    },
    fullScreenSourceRect: {
      get: function() {
        return fullScreenSourceRect_;
      },
      set: function(val) {
        fullScreenSourceRect_ = val;
      }
    },
    fullScreenWidth: {
      get: function() {
        return fullScreenWidth_;
      }
    },
    height: {
      get: function() {
        return height_;
      },
      set: function(val) {
        canvas_.height = val;
        height_ = val;
      }
    },
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
        return numChildren_;
      }
    },
    quality: {
      get: function() {
        return quality_;
      },
      set: function(val) {
        quality_ = val;
      }
    },
    scaleMode: {
      get: function() {
        return scaleMode_;
      },
      set: function(val) {
        scaleMode_ = val;
      }
    },
    showDefaultContextMenu: {
      get: function() {
        return showDefaultContextMenu_;
      },
      set: function(val) {
        showDefaultContextMenu_ = val;
      }
    },
    stageFocusRect: {
      get: function() {
        return stageFocusRect_;
      },
      set: function(val) {
        stageFocusRect_ = val;
      }
    },
    stageHeight: {
      get: function() {
        return stageHeight_;
      },
      set: function(val) {
        stageHeight_ = val;
      }
    },
    stageWidth: {
      get: function() {
        return stageWidth_;
      },
      set: function(val) {
        stageWidth_ = val;
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
    },
    width: {
      get: function() {
        return width_;
      },
      set: function(val) {
        canvas_.width = val;
        width_ = val;
      }
    }
  }); /* </ Object.defineProperties > */

  //----------------------------------------------------------------------------
  // </ Getters n Setters >                                                    -
  //----------------------------------------------------------------------------

  /**
   * @private
   *
   * init is private, unlike some other classes such as DisplayObject
   * because it will never be used by the user or other classes, so we do
   * not need to call it, or extend it, via other classes.
   *
   * @param {string} canvas The id of the canvas element to target (without #)
   */
  init = function(canvas) {

    console.log('private Stage.init. What is "this" ? ', this);
    console.log('private Stage.init. What is "self" ? ', self);

    canvas_ = document.getElementById(canvas);
    width_ = canvas_.width;
    height_ = canvas_.height;
    console.log(canvas_);

  };

  //----------------------------------------------------------------------------
  // < Public Methods >                                                        -
  //----------------------------------------------------------------------------


  this.addChild = function(child) {
    // TODO: function body
  };

  this.addChildAt = function(child, index) {
    // TODO: function body
  };

  this.addEventListener = function(type, listener, useCapture,
                                   priority, useWeakReference) {

    useCapture = useCapture || false;
    priority = priority || 0;
    useWeakReference = useWeakReference || false;

    // TODO: function body

  };

  this.assignFocus = function(objectToFocus, direction) {
    // TODO: function body
  };

  this.dispatchEvent = function(event) {
    // TODO: function body
  };

  this.hasEventListener = function(type) {
    // TODO: function body
  }

  this.invalidate = function() {
    // TODO: function body
  };

  this.isFocusInaccessible = function() {
    // TODO: function body
  };

  this.removeChildAt = function(index) {
    // TODO: function body
  };

  this.setChildIndex = function(child, index) {
    // TODO: function body
  };

  this.swapChildrenAt = function(index1, index2) {
    // TODO: function body
  };

  this.willTrigger = function(type) {
    // TODO: function body
  };

  this.toString = function toString() {
    return 'Stage';
  };

  init(canvas);

};

// Stage -> DisplayObjectContainer -> InteractiveObject ->
//          DisplayObject -> EventDispatcher -> Object
Stage.inherits(DisplayObjectContainer);
