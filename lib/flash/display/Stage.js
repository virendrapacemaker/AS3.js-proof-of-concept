/**
 * Adobe Stage docs: http://bit.ly/chYY6X
 *
 * TODO: Flesh out the Stage class
 * TODO: init/create Stage as canvas element
 * TODO: Stage events
 * TODO: Enforce the settings on inherited values that are inaplicable (see docs)
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
      mouseChildren_ = true,      
      quality_,
      scaleMode_,
      showDefaultContextMenu_,
      stageFocusRect_,
      stageHeight_,
      stageWidth_,
      tabChildren_ = true,
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
        // Set the focus to an InteractiveObject
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
        return _(displayList_).chain().compact().size().value();
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
        // TODO: hook up right-click menu to actual menu manager
        if(val && canvas_) {
          canvas_.oncontextmenu = function() { return true; };
        }
        else if(canvas_) {
          canvas_.oncontextmenu = function() { return false; };
        }
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


  /**
   * @override
   */
  this.addChild = function(child) {
  
    if(child instanceof DisplayObject) { 
    
      if(child.parent) {
        child.parent.removeChild(child);
      }
      
      displayList_.push(child); 
      
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
  this.addChildAt = function(child, index) {
  
    if(child instanceof DisplayObject) { 
    
      if(child.parent) {
        child.parent.removeChild(child);
      }
      
      if(!displayList_[index]) {
        displayList_[index] = child;
      }
      else {
        displayList_.splice(index, 0, child);
      } 
      
      child.setParent_(this);

      var e = new Event(Event.ADDED);
      e.target = child;
      this.dispatchEvent(e);
      
      return child;
    }
    
    return undefined; // TODO: what is appropriate return value on fail?
    
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
  
  this.removeChild = function(index) {
        
    var i = 0,
        len = displayList_.length;

    for(i; i < len; i++) {
      if(displayList_[i] === child) {
        displayList_.splice(i, 1);
        child.unsetParent_();
        return child;
      }
    }
    
    return false;
    
  };

  this.removeChildAt = function(index) {
        
    if(displayList_.length >= index) {
      return displayList_.splice(index, 1);
      child.unsetParent_();
      return child;
    }
    
    return false;
    
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
