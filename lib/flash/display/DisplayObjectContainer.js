goog.provide('flash.display.DisplayObjectContainer');
goog.provide('DisplayObjectContainer');

goog.require('flash.display');
goog.require('flash.display.InteractiveObject');

/**
 * Adobe DisplayObjectContainer docs: http://bit.ly/9pIZHX
 *
 * @constructor
 */
flash.display.DisplayObjectContainer = DisplayObjectContainer = function() {

  InteractiveObject.call(this);

  // TODO: Create Display List manager tools...
  // we'll probably want more than a simple array cause we will be doing alot
  // or searching, rearranging of order and depth, and adding/removing.
  // Create a basic display list manager for making these operations easier.

  this.mouseChildren_ = true;
  this.tabChildren_ = true;
  this.textSnapshot_;
  this.displayList_ = [];

};
goog.inherits(DisplayObjectContainer, InteractiveObject);
// DisplayObjectContainer -> InteractiveObject -> DisplayObject ->
// EventDispatcher -> Object

Object.defineProperties(DisplayObjectContainer.prototype, {
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
  }
}); /* </ Object.defineProperties > */

/**
 * Add a child to the display object stack.
 *
 * @this flash.display.DisplayObjectContainer
 *
 * @param {DisplayObject} child The display object to add.
 * @return {DisplayObject} The display object added to the stack.
 */
DisplayObjectContainer.prototype.addChild = function(child) {

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
  this.displayList_.push(child);
  child.setParent_(this);

  var e = new Event(Event.ADDED);
  e.target = this; // TODO; is event target this Display Object, or the child?
  this.dispatchEvent(e);

  return child;

};

DisplayObjectContainer.prototype.removeChild = function(child) {

  // TODO: Remove Child from display list

  // If child ! in display list, throw error

  // else remove child from display list

  child.unsetParent_();

  return child;

};

DisplayObjectContainer.prototype.getChildByName = function(n) {

  var found = undefined;

  _.detect(this.displayList_,
    function(child, index) {
      if (child.name == n) {
        //console.log('Looked for child named "' + n + '", found: ', child);
        found = child;
        return true;
      }
      return false;
    }
  );

  return found;

};

DisplayObjectContainer.prototype.toString = function() {
  return 'DisplayObject:{x:' + this.x + ', y:' + this.y + '}';
};

DisplayObjectContainer.prototype.getChildAt = function(index) {

  if(this.displayList_[index]) {
    return this.displayList_[index];
  }
  return null;

};

DisplayObjectContainer.prototype.getChildIndex = function(compare) {

  var i = -1;

  _.detect(this.displayList_,
    function(child, index) {
      if(child === compare) {
        i = index;
        return true;
      }
      return false;
    }
  );

  return i;

};

DisplayObjectContainer.prototype.swapChildrenAt = function(indexA, indexB) {

  var childA = this.getChildAt(indexA);
  this.displayList_[indexA] = this.getChildAt(indexB);
  this.displayList_[indexB] = childA;

};

DisplayObjectContainer.prototype.swapChildren = function(a, b) {

  indexA = this.getChildIndex(a);
  indexB = this.getChildIndex(b);

  this.swapChildrenAt(indexA, indexB);

};

DisplayObjectContainer.prototype.displayListToString = function() {

  var i = 0, s = 'displayList:[', len = this.displayList_.length;

  for (i; i < len; i++) {
    if (this.displayList_[i]) {
      s += this.displayList_[i].toString();
      if (i < len - 1) {
        s += ', ';
      }
    }
  }

  s += ']';

  return s;

};

/*
 * DisplayObjectContainer.prototype.toString = function() {
 *
 * var i = 0, s = 'DisplayObject.displayList:[', len = displayList_.length;
 *
 * for(i; i < len; i++) { if(this[i]) { s += displayList_[i].toString(); if(i <
 * len-1) { s += ', '; } } }
 *
 * s += ']';
 *
 * return s;
 *  }
 */

goog.exportSymbol('flash.display.DisplayObjectContainer', flash.display.DisplayObjectContainer);
goog.exportSymbol('DisplayObjectContainer', DisplayObjectContainer);